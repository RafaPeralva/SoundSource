package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.repository.CrudRepository;
import soundsource.springframework.soundsourcebackend.domain.Song;

public interface SongRepository extends CrudRepository<Song,Long> {

}
