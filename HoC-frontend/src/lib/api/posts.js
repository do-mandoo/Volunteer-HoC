import client from './client';

export const removePost = id => client.delete(`/api/posts/${id}`);
console.log(removePost);
