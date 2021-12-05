package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import soundsource.springframework.soundsourcebackend.domain.Suggested;
import soundsource.springframework.soundsourcebackend.domain.User;
import soundsource.springframework.soundsourcebackend.repositories.SuggestedRepository;
import soundsource.springframework.soundsourcebackend.repositories.UserRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserInfoController {
    private final UserRepository userRepository;

    public UserInfoController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getUser() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable String id) {
        return userRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createUser(@RequestBody User user) throws URISyntaxException {
        User savedUser = userRepository.save(user);
        return ResponseEntity.created(new URI("/user/" + savedUser.getUserId())).body(savedUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateUser(@PathVariable String id, @RequestBody User user) {
        User currentUser = userRepository.findById(id).orElseThrow(RuntimeException::new);
        currentUser.setLikedSongName(user.getLikedSongName());
        currentUser.setLikedSongArtist(user.getLikedSongArtist());
        currentUser.setPlaylistName(user.getPlaylistName());
        currentUser = userRepository.save(user);

        return ResponseEntity.ok(currentUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteSuggested(@PathVariable String id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
