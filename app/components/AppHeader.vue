<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'Tính năng',
  to: '#features',
  icon: 'i-heroicons-cube-transparent',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Báo giá',
  to: '#pricing',
  icon: 'i-heroicons-credit-card',
  active: activeHeadings.value.includes('pricing') && !activeHeadings.value.includes('testimonials')
}, {
  label: 'Lời chứng thực',
  to: '#testimonials',
  icon: 'i-heroicons-academic-cap',
  active: activeHeadings.value.includes('testimonials')
}, {
  label: 'Câu hỏi thường gặp',
  to: '#faq',
  icon: 'i-heroicons-question-mark-circle',
  active: activeHeadings.value.includes('faq')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq')
  ])
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Long Web Studio <UBadge
        label=".Net"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <template #right>
      <UButton
        label="0374638603"
        to="tel:0374638603"
        color="white"
        variant="ghost"
        icon="i-simple-icons-zalo"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton
        label="0374638603"
        to="tel:0374638603"
        icon="i-simple-icons-zalo"
        color="white"
        block
        class="mb-3"
      />
      <!-- <UButton
        label="Bắt đầu"
        block
      /> -->
    </template>
  </UHeader>
</template>
