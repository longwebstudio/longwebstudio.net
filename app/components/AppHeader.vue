<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Báo giá',
  to: '/bao-gia'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Long Web Studio
      <UBadge label="Net" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="Tư vấn" color="gray" to="https://zalo.me/g/vkeydv728" />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" default-open />
    </template>
  </UHeader>
</template>
