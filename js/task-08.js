function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
      alert('Por favor, rellena todos los campos.');
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);

    // Reiniciar los valores del formulario
    form.reset();
  }
