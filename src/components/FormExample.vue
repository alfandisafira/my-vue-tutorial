<script setup>
import { ref } from 'vue'

const name = ref('')
const age = ref(null)
const desc = ref('')
const skills = ref([])
const status = ref('')
const education = ref('')

const optionsEducation = ref([
  {
    label: 'Select your last education',
    value: '',
  },
  {
    label: 'Elementary High School',
    value: 'EHS',
  },
  {
    label: 'Junior High School',
    value: 'JHS',
  },
  {
    label: 'Senior High School',
    value: 'SHS',
  },
  {
    label: 'Bachelor Degree',
    value: 'BD',
  },
])

const displayOnConsole = () => {
  console.log({
    name: name.value,
    age: age.value,
    desc: desc.value,
    skills: skills.value.map((skill) => skill),
    status: status.value,
    education: education.value,
  })
}
</script>

<template>
  <div><h1>My Form</h1></div>
  <br />

  <div>
    Typed: {{ name }}
    <br />
    <label for="name">Full Name</label>
    <div><input type="text" v-model.lazy="name" /></div>
  </div>
  <br />

  <div>
    <label for="age">Age</label>
    <div><input type="text" v-model.number="age" /></div>
  </div>
  <br />

  <div>
    <label for="desc">About You</label>
    <div>
      <textarea v-model="desc" placeholder="Tell me yourself" cols="30" rows="3"></textarea>
    </div>
  </div>
  <br />

  <div>
    <label>Your Skill</label><br />

    <input type="checkbox" value="HTML" v-model="skills" />
    <label>HTML</label>

    <input type="checkbox" value="CSS" v-model="skills" />
    <label>CSS</label>

    <input type="checkbox" value="Javascript" v-model="skills" />
    <label>Javascript</label>
  </div>
  <br />

  <div>
    <label>Skilled</label><br />
    <ol>
      <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
    </ol>
  </div>
  <br />

  <div>
    <label>Status</label><br />

    <input type="radio" value="Single" v-model="status" />
    <label>Single</label>

    <input type="radio" value="Marriage" v-model="status" />
    <label>Marriage</label>
  </div>
  <br />

  <div>
    <label>Last Education</label><br />

    <select v-model="education">
      <option
        v-for="(option, index) in optionsEducation"
        :key="`edu-${index}`"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
  <br />

  <div>
    <button @click="displayOnConsole">DISPLAY</button>
  </div>
</template>

<style></style>
