<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { blog } from './blog';
  import '../../styles.css';

  const source = blog;
</script>

<div class='blog-cont'>
  <div class='blog'><SvelteMarkdown { source } /></div>
</div>

<style>
  .blog-cont {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .blog {
    max-width: 700px;
  }
</style>