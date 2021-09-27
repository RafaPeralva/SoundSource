package soundsource.springframework.soundsourcebackend.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Suggested {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String songName;
    private String playlistName;
    private String status;

    @ManyToOne
    @JoinTable(name = "user_suggested", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = true),
            inverseJoinColumns = @JoinColumn(name = "suggested_id", referencedColumnName = "id", nullable = true))
    private User user;

    public Suggested() {
    }

    public Suggested(String songName, String playlistName, String status,User user) {
        this.songName = songName;
        this.playlistName = playlistName;
        this.status = status;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public String getPlaylistName() {
        return playlistName;
    }

    public void setPlaylistName(String playlistName) {
        this.playlistName = playlistName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Suggested{" +
                "id=" + id +
                ", songName='" + songName + '\'' +
                ", playlistName='" + playlistName + '\'' +
                ", status='" + status + '\'' +
                ", user=" + user +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Suggested suggested = (Suggested) o;
        return Objects.equals(id, suggested.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
