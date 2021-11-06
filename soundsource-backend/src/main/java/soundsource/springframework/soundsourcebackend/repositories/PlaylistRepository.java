package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import soundsource.springframework.soundsourcebackend.domain.Playlist;

public interface PlaylistRepository extends JpaRepository<Playlist,Long> {

}