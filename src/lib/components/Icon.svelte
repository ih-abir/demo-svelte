<script lang="ts">
  export let src: string;
  export let className: string = "";

  const svg = src.replace('<svg', `<svg class="${className}"`);
</script>

{@html svg}
