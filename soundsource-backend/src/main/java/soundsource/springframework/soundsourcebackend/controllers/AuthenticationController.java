package soundsource.springframework.soundsourcebackend.controllers;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.SpotifyHttpManager;

@RestController
@RequestMapping("/api")
public class AuthenticationController {
    private static final URI redirectUri = SpotifyHttpManager.makeUri("http:localhost:8080/api/get-user-code/");
    private String clientId = "d3e1683020674ab9bddebbb1f3b4c1df";
    private String clientSecret = "c1a07f01646749eca7763697eb0a9764";
    private String code = "";

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setClientID(clientId)
            .setClientSecret(clientSecret)
            .setRredirectUri(redirectUri)
            .build()
}
