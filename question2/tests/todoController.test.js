const request = require('supertest');
const app = require('../controllers/todoController');

describe('GET /tasks', () => {
    it('should return empty initially', async () => {
        const response = await request(app).get('/tasks');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });
});

describe('POST /tasks', () => {
    it('should create a new task', async () => {
        const data = { title: 'Test Task', completed: false };
        const response = await request(app)
            .post('/tasks')
            .send(data);
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test Task');
        expect(response.body.completed).toBe(false);
    });
});

describe('DELETE /tasks/:id', () => {
    it('should delete an existing task', async () => {
        const responseCreate = await request(app)
            .post('/tasks')
            .send({ title: 'To Be Deleted', completed: true });
        const taskId = responseCreate.body.id;

        const responseDelete = await request(app).delete(`/tasks/${taskId}`);
        expect(responseDelete.status).toBe(204);

        const responseGet = await request(app).get('/tasks');
        const deletedTask = responseGet.body.find(task => task.id === taskId);
        expect(deletedTask).toBeUndefined();
    });
});
