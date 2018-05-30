<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SpotifyWebAPI\Session;
use SpotifyWebAPI\SpotifyWebAPI;
use App\AuthToken;

class SpotifyController extends Controller
{
    private $accessCode = '';

    public function __construct()
    {
        $date = new \DateTime();
        $this->token = AuthToken::find('spotify')->token();

        if ($this->token) {
            if ($date->getTimestamp() > $this->token->expires) {
                self::refreshToken();
            }
            $this->api = new SpotifyWebAPI();
            $this->api->setAccessToken($this->token->access);
        }
    }

    private function refreshToken()
    {
        $session = new Session(
            config('spotify.client_id'),
            config('spotify.client_secret'),
            'http://127.0.0.1:8000/authed/spotify'
        );

        $session->refreshAccessToken($this->token->refresh);
        $tokens = [
            'access' => $session->getAccessToken(),
            'refresh' => $session->getRefreshToken(),
            'expires' => $session->getTokenExpiration(),
        ];
        AuthToken::updateOrCreate(
            ['name' => 'spotify'],
            ['token' => serialize($tokens)]
        );

        $this->tokens = (object) $tokens;
    }

    public function login()
    {
        $session = new Session(
            config('spotify.client_id'),
            config('spotify.client_secret'),
            'http://127.0.0.1:8000/authed/spotify'
        );

        $options = [
            'scope' => [
                'user-read-currently-playing',
                'user-modify-playback-state',
                'user-read-playback-state',
            ],
        ];

        header('Location: ' . $session->getAuthorizeUrl($options));
        die();
    }

    public function authed()
    {
        $session = new Session(
            config('spotify.client_id'),
            config('spotify.client_secret'),
            'http://127.0.0.1:8000/authed/spotify'
        );
        $session->requestAccessToken($_GET['code']);

        AuthToken::updateOrCreate(
            ['name' => 'spotify'],
            ['token' => serialize([
                'access' => $session->getAccessToken(),
                'refresh' => $session->getRefreshToken(),
                'expires' => $session->getTokenExpiration(),
            ])]
        );

        return redirect()->route('spotify:currentTrack');
    }

    public function currentTrack()
    {
        if (isset($this->api)) {
            try {
                $response = $this->api->getMyCurrentTrack();
            } catch (Exception $error) {
                die('boo');
            }

            return response()->json($response);
        }
    }
}
