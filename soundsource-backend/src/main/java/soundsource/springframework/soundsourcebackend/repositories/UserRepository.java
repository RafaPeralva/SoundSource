package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.repository.CrudRepository;
import soundsource.springframework.soundsourcebackend.domain.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
