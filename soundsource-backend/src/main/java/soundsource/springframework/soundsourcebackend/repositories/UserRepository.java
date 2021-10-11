package soundsource.springframework.soundsourcebackend.repositories;

import org.springframework.data.repository.CrudRepository;
import soundsource.springframework.soundsourcebackend.domain.User;

//Repositories are responsible for persistence and query operations on JPA entities.
public interface UserRepository extends CrudRepository<User, Long> {

}
