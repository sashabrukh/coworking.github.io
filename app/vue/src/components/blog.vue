<template lang="pug">
  .blog-section
    h1.blog-title Страница "Блог"
    input.blog-name(type='text', value='Название')
    input.blog-date(type='text', value='Дата')
    textarea.blog-text(placeholder='Содержание')
    button.blog-btn(type='submit') Добавить
      
</template>
<script>

export default {
  props : {
    pageId: String
  }
};
</script>

<style src="styles/blog.scss" lang="scss" scoped></style>

