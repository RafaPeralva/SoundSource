package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.special.SnapshotResult;
import com.wrapper.spotify.requests.data.playlists.AddItemsToPlaylistRequest;

import org.apache.hc.core5.http.ParseException;
import java.io.IOException;
import java.util.Arrays;

import static soundsource.springframework.soundsourcebackend.controllers.AuthenticationController.spotifyApi;

@RestController
@RequestMapping("/api")
public class ExportPlaylistController {

    @GetMapping(value = "exportPlaylist")
    public static void exportingPlaylist(String[] q) {
        String playlistName = "General";
        if(q == null) {
            q = new String[]{"spotify:track:01iyCAUm8EvOFqVWYJ3dVX"};
        } else {
            playlistName = q[q.length - 1];
            q = Arrays.copyOf(q, q.length-1);
        }

        final String playlistId = CreatePlaylistController.createPlaylist("playlist", playlistName);

        final AddItemsToPlaylistRequest addItemsToPlaylistRequest = spotifyApi
                .addItemsToPlaylist(playlistId, q)
                .build();

        try {
            final SnapshotResult snapshotResult = addItemsToPlaylistRequest.execute();

            System.out.println("Snapshot ID: " + snapshotResult.getSnapshotId());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    @GetMapping(value = "exportSuggested")
    public static void exportingSuggested(String[] q) {
        String playlistName = "General";
        if(q == null) {
            q = new String[]{"spotify:track:01iyCAUm8EvOFqVWYJ3dVX"};
        } else {
            playlistName = q[q.length - 1];
            q = Arrays.copyOf(q, q.length-1);
        }

        final String playlistId = CreatePlaylistController.createPlaylist("suggested", playlistName);

        final AddItemsToPlaylistRequest addItemsToPlaylistRequest = spotifyApi
                .addItemsToPlaylist(playlistId, q)
                .build();

        try {
            final SnapshotResult snapshotResult = addItemsToPlaylistRequest.execute();

            System.out.println("Snapshot ID: " + snapshotResult.getSnapshotId());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

}
