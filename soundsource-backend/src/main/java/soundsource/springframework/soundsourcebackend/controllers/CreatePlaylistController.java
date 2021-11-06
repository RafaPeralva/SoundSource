package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.specification.Playlist;
import com.wrapper.spotify.requests.data.playlists.CreatePlaylistRequest;

import org.apache.hc.core5.http.ParseException;
import java.io.IOException;

import static soundsource.springframework.soundsourcebackend.controllers.AuthenticationController.spotifyApi;

@RestController
@RequestMapping("/api")
public class CreatePlaylistController {

    @GetMapping(value = "createPlaylist")
    public static String createPlaylist() {
        final String userId = UserController.getUserId();
        final String name = "General by Spotify SoundSource";

        final CreatePlaylistRequest createPlaylistRequest = spotifyApi.createPlaylist(userId, name).build();

        try {
            final Playlist playlist = createPlaylistRequest.execute();

            System.out.println("Name: " + playlist.getName());
            return playlist.getId();
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
            return "ERROR";
        }
    }
}
