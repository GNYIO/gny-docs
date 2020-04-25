<template>
  <div>
    <slot>
      <p>Text that shows if no text is given.</p>
    </slot>
  </div>
</template>


<script>
// import * as client from 'peer-id';

export default {
  name: 'demo-1',
  beforeMount() {
    import('peer-id').then(module => {
    });
  }
}
</script>

