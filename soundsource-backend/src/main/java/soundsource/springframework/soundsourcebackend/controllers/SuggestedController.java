package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import soundsource.springframework.soundsourcebackend.domain.Suggested;
import soundsource.springframework.soundsourcebackend.repositories.SuggestedRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/suggested")
public class SuggestedController {
    private final SuggestedRepository suggestedRepository;

    public SuggestedController(SuggestedRepository suggestedRepository) {
        this.suggestedRepository = suggestedRepository;
    }

    @GetMapping
    public List<Suggested> getSuggested() {
        return suggestedRepository.findAll();
    }

    @GetMapping("/{id}")
    public Suggested getSuggested(@PathVariable Long id) {
        return suggestedRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createSuggested(@RequestBody Suggested suggested) throws URISyntaxException {
        Suggested savedSuggested = suggestedRepository.save(suggested);
        return ResponseEntity.created(new URI("/suggested/" + savedSuggested.getId())).body(savedSuggested);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateSuggested(@PathVariable Long id, @RequestBody Suggested suggested) {
        Suggested currentSuggested = suggestedRepository.findById(id).orElseThrow(RuntimeException::new);
        currentSuggested.setTrackName(suggested.getTrackName());
        currentSuggested.setArtistName(suggested.getArtistName());
        currentSuggested.setUpvoteCount(suggested.getUpvoteCount());
        currentSuggested = suggestedRepository.save(suggested);

        return ResponseEntity.ok(currentSuggested);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteSuggested(@PathVariable Long id) {
        suggestedRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
