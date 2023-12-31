import Role from '../models/role.model';

const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return;

        const roles = [
            { name: 'scholar' },
            { name: 'moderator' },
            { name: 'admin' },
        ];

        const savedRoles = await Promise.all(roles.map(role => new Role(role).save()));
        console.log(savedRoles);
    } catch (error) {
        console.error(error);
    }
};

export {
    createRoles,
};