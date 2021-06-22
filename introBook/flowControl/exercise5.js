// refactor the following

return foo() ? 'bar' : qux();

// answer

if (foo()) {
  return 'bar';
} else {
  return qux();
}