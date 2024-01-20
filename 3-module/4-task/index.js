function showSalary(users, age) {
  return users.filter(u => u.age <= age).map(data => `${data.name}, ${data.balance}`).join("\n");
}
