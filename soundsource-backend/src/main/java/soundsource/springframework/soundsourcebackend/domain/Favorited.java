package soundsource.springframework.soundsourcebackend.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;

//Set up entities for favorited to be stored as a table within the database
@Entity
public class Favorited {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String playlistName;
    private String playlistGenre;

    @ManyToOne
    @JoinTable(name = "user_favorited", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = true),
            inverseJoinColumns = @JoinColumn(name = "favorited_id", referencedColumnName = "id", nullable = true))
    private User user;

    public Favorited() {
    }

    public Favorited(String playlistName, String playlistGenre, User user) {
        this.playlistName = playlistName;
        this.playlistGenre = playlistGenre;
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    @Override
    public String toString() {
        return "Favorited{" +
                "id=" + id +
                ", playlistName='" + playlistName + '\'' +
                ", playlistGenre='" + playlistGenre + '\'' +
                ", user=" + user +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Favorited favorited = (Favorited) o;
        return Objects.equals(id, favorited.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
