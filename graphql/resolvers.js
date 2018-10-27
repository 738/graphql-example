import { boards, users, getUserById } from './db';

const resolvers = {
    Query: {
        boards: () => boards,
        users: () => users,
        user: (_, { id }) => getUserById(id),
    }
}

export default resolvers;
