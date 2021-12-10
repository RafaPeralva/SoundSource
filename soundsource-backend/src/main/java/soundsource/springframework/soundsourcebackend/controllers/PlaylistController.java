package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import soundsource.springframework.soundsourcebackend.domain.Playlist;
import soundsource.springframework.soundsourcebackend.repositories.PlaylistRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/playlist")
public class PlaylistController {
    private final PlaylistRepository playlistRepository;

    public PlaylistController(PlaylistRepository playlistRepository) {
        this.playlistRepository = playlistRepository;
    }

    @GetMapping
    public List<Playlist> getPlaylist() {
        return playlistRepository.findAll();
    }

    @GetMapping("/{id}")
    public Playlist getPlaylist(@PathVariable Long id) {
        return playlistRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createPlaylist(@RequestBody Playlist playlist) throws URISyntaxException {
        Playlist savedPlaylist = playlistRepository.save(playlist);
        return ResponseEntity.created(new URI("/playlist/" + savedPlaylist.getId())).body(savedPlaylist);
    }

    @PutMapping("/{id}")
    public ResponseEntity updatePlaylist(@PathVariable Long id, @RequestBody Playlist playlist) {
        Playlist currentPlaylist = playlistRepository.findById(id).orElseThrow(RuntimeException::new);
        currentPlaylist.setTrackURI(playlist.getTrackURI());
        currentPlaylist.setTrackName(playlist.getTrackName());
        currentPlaylist.setArtistName(playlist.getArtistName());
        currentPlaylist = playlistRepository.save(playlist);

        return ResponseEntity.ok(currentPlaylist);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletePlaylist(@PathVariable Long id) {
        playlistRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
