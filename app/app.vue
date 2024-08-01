<script setup lang="ts">
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'msapplication-tileColor', name: 'msapplication-TileColor', content: '#ffc40d' },
    { key: 'theme-color', name: 'theme-color', content: '#f9cf53' }
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#f9cf53' }
  ],
  htmlAttrs: {
    lang: 'vi'
  }
})

useSeoMeta({
  titleTemplate: '%s | Long Web Studio',
  ogImage: 'https://i0.wp.com/store.longwebstudio.net/wordpress/wp-content/uploads/2021/06/thiet-ke-website-ban-hang.jpg',
  twitterImage: 'https://i0.wp.com/store.longwebstudio.net/wordpress/wp-content/uploads/2021/06/thiet-ke-website-ban-hang.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <AppHeader />

  <UMain>
    <NuxtPage />
  </UMain>

  <AppFooter />

  <UNotifications />
</template>
