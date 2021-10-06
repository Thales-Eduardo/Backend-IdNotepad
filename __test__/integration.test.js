const axios = require('axios').default;

const url = 'http://localhost:3333';

describe('Integration tests', () => {
  it('Create post', async () => {
    const post = await axios.post(`${url}/post`, {
      title: 'post1',
      check: false,
      immediate: false,
      urgent: false,
    });

    expect(post.data).toHaveProperty('id');
    expect(post.data.title).toBe('post1');
    expect(post.data.check).toBe(false);

    const deletePost = await axios.delete(`${url}/post/delete/${post.data.id}`);
    expect(deletePost.status).toBe(204);
  });

  it('Update post', async () => {
    const post = await axios.post(`${url}/post`, {
      title: 'post1',
      check: false,
      immediate: false,
      urgent: false,
    });

    const update = await axios.put(`${url}/post/update/${post.data.id}`, {
      check: true,
      immediate: false,
      urgent: false,
    });

    expect(update.status).toBe(200);
    expect(update.data.check).toBe(true);

    await axios.delete(`${url}/post/delete/${post.data.id}`);
  });
});
