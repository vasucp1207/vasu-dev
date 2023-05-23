<script>
  import './styles.css';
</script>

<div class='header'>
  <a href='/' class='initials'>𝒱𝒮</a>
  <div class='links'>
    <a href='/'>Home</a>
    <a href='/blogs'>Blogs</a>
    <a href='https://github.com/vasucp1207'>Github</a>
  </div>
</div>

<style>
  .header {
    font-family: Public Sans, system-ui;
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    font-size: 17px;
  }
  a {
    text-decoration: none;
  }
  .initials {
    text-decoration: none;
		background: -webkit-linear-gradient(right, #000, #b91372);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    cursor: pointer;
    font-size: 27px !important;
    font-weight: 100;
    margin-left: 30px;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    margin-right: 30px;
  }
  .links>a {
    font-weight: 600;
		background: -webkit-linear-gradient(right, #000, #b91372);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    text-decoration: underline 2px #efb2bd;
    padding: 8px;
  }
  .links>a:hover {
    background: #efc5ce;
    border-radius: 8px;
    -webkit-text-fill-color: #b91372;
    text-decoration: underline 2px #b91372;
  }
</style>
