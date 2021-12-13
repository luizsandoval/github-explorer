import { Repository } from '../models/repository';

interface RepositoryItemProps {
    repository: Omit<Repository, 'id'>;
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
    return (
        <li>
            <strong>{repository?.name}</strong>
            <p>{repository?.description}</p>
            <a href={repository?.html_url}>Acessar repositório</a>
        </li>
    );
}
