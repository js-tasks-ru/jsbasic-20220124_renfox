function makeFriendsList(friends) {
  const newUl = document.createElement('ul');
  document.body.append(newUl);

for (const item of friends) {
		newUl.insertAdjacentHTML('beforeEnd', `<li>${item.firstName}` + ' '+ `${item.lastName}</li>`);
	}
  return newUl;
}
