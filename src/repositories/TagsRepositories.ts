import { EntityRepository, Repository } from "typeorm";
import { Tag } from '../entities/Tag';

//precisamos passar o tipo para o repository q vem do typeorm; no caso o tipo é da entidade q criamos
@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories };