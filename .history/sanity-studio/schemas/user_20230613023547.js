export default {
  title: 'User',
  name: 'user', //model name
  type: 'document',
  fields: [
    {
      title: 'Username', //title is name to see at studio ui
      name: 'username', // name is database key for accessing
      type: 'string',
    },
  ],
}
