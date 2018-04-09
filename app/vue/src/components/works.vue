<template lang="pug">
  .works-section
    h1.works-title Страница "Мои работы"
    h3 Добавить работу
    input.blog-name(type='text', value='Название проекта')
    input.blog-date(type='text', value='Технологии')
    .load-img
      p.desc Загрузить картинку
      input(type='file', value='Добавить')
</template>
<script>

export default {
  props : {
    pageId: String
  }
};
</script>


<style src="styles/works.scss" lang="scss" scoped></style>