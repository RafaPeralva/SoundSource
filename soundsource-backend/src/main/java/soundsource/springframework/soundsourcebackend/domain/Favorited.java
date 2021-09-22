package soundsource.springframework.soundsourcebackend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Favorited {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String playlistName;
    private String playlistGenre;

    public Favorited() {
    }

    public Favorited(String playlistName, String playlistGenre) {
        this.playlistName = playlistName;
        this.playlistGenre = playlistGenre;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlaylistName() {
        return playlistName;
    }

    public void setPlaylistName(String playlistName) {
        this.playlistName = playlistName;
    }

    public String getPlaylistGenre() {
        return playlistGenre;
    }

    public void setPlaylistGenre(String playlistGenre) {
        this.playlistGenre = playlistGenre;
    }
}
