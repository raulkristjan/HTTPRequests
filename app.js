const http = new EasyHTTP();

// User data to add
const data = {
	name: 'First Name',
	username: 'firstName',
	email: 'firstName@someMail.com'
};

// GET users
// http
// 	.get('https://jsonplaceholder.typicode.com/users')
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

// Create user
// http
// 	.post('https://jsonplaceholder.typicode.com/users', data)
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

// Update user
// http
// 	.put('https://jsonplaceholder.typicode.com/users/1', data)
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

// Delete user
// http
// 	.delete('https://jsonplaceholder.typicode.com/users/1')
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));
