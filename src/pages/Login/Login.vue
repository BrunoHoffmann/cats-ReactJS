<template>
  <div>
    <MenuLogin />
    <div class="page">
      <img class="capa" src="../../assets/img/cat-background.jpg" alt="">
      <div>
        <div class="form-login">
          <Title title="Login" />
          <form action="">
            <Label class="label" forLabel="username" titleLabel="Usuário" />
            <Input type="text" />
            <Label class="label" forLabel="password" titleLabel="Senha" />
            <Input type="password" />
            <Button title="Entrar"></Button>
          </form>
          <router-link class="forgot" to="/forgot">Perdeu a senha?</router-link>
          <div class="register">
            <h2 class="subTitle">Cadastre-se</h2>
            <span>Ainda não possui conta? Cadastre-se no site.</span>

            <router-link to="/register">
              <Button title="Cadastro"></Button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <img src="../../assets/img/cat-logo-black.png" alt="logo">
      <p>Cat. Alguns direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
import MenuLogin from '../../components/MenuLogin/MenuLogin.vue';
import Button from '../../components/Button/Button.vue';
import Label from '../../components/Label/Label.vue';
import Input from '../../components/Input/Input.vue';
import Title from '../../components/Title/Title.vue';

export default {
  name: 'Login',
  components: {
    MenuLogin,
    Button,
    Label,
    Input,
    Title,
  }
};
</script>

<style src="./style.css" scoped />
