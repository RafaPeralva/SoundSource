package soundsource.springframework.soundsourcebackend.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "playlist")
public class Playlist {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    private String trackName;
    private String artistName;

    public Playlist() {
    }

    public Playlist(String id, String trackName, int upvoteCount, String artistName) {
        this.id = id;
        this.trackName = trackName;
        this.artistName = artistName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTrackName() {
        return trackName;
    }

    public void setTrackName(String trackName) {
        this.trackName = trackName;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    @Override
    public String toString() {
        return "Playlist{" +
                "id=" + id +
                ", trackName='" + trackName + '\'' +
                ", artistName='" + artistName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Playlist playlist = (Playlist) o;
        return Objects.equals(id, playlist.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
