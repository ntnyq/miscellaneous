<template>
  <div class="renderless">
    <div class="section">
      <h3>Layout 1</h3>
      <tags-input v-model="tags">
        <div
          class="tags-input"
          slot-scope="{addTag, removeTag, inputAttrs, inputEvents}"
        >
          <el-tag
            @close="removeTag(tag)"
            v-for="tag in tags"
            :key="tag"
            closable
            effect="dark"
          >
            {{ tag }}
          </el-tag>
          <input
            v-on="inputEvents"
            v-bind="inputAttrs"
            class="tags-input-text"
            placeholder="Add Tag..."
            type="text"
          >
        </div>
      </tags-input>
    </div>
    <div class="section">
      <h3>Layout 2</h3>
      <div class="section-main">
        <tags-input v-model="tags">
          <div
            class="tags-input"
            slot-scope="{addTag, removeTag, inputAttrs, inputEvents}"
          >
            <div class="flex">
              <input
                v-on="inputEvents"
                v-bind="inputAttrs"
                class="tags-input-text"
                placeholder="Add Tag..."
                type="text"
              >
              <el-button
                @click="addTag"
                type="primary"
              >
                Add Tag
              </el-button>
            </div>
            <ul class="tags-input-tag-list">
              <li
                v-for="tag in tags"
                :key="tag"
                class="tags-input-tag-item"
              >
                <el-tag
                  @close="removeTag(tag)"
                  closable
                  effect="dark"
                >
                  {{ tag }}
                </el-tag>
              </li>
            </ul>
          </div>
        </tags-input>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TagsInput
} from './components'

export default {
  name: 'Renderless',

  components: {
    TagsInput
  },

  data () {
    return {
      tags: [
        '李栓蛋',
        '王花花'
      ]
    }
  }
}
</script>

<style lang="scss">
.renderless {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 600px;
  min-width: 300px;

  ul,
  li {
    list-style: none;
  }

  input {
    appearance: none;
    background: none;
    border: none;
    box-shadow: none;
    outline: none;
  }

  .section {
    position: relative;
    margin-bottom: 15px;

    h3 {
      margin-bottom: 5px;
      line-height: 1.6;
      font-size: 18px;
      font-weight: 500;
      color: #999;
    }

    &-main {
      padding: 10px;
      background-color: #fff;
      border: 1px solid #cfcfcf;
      border-radius: 3px;

      .tags-input {
        display: block;
        border: none;

        &-text {
          height: 40px;
          margin: 0 10px 0 0;
          border: 1px solid #cfcfcf;
          border-radius: 3px;
        }
      }
    }
  }

  .tags-input {
    display: flex;
    flex-wrap: wrap;
    padding: 8px 10px 3px;
    background-color: #fff;
    border: 1px solid #cfcfcf;
    border-radius: 3px;

    .el-tag {
      margin: 0 10px 5px 0;
    }

    &-text {
      flex: 1 0;
      min-width: 100px;
      padding: 4px 4px 4px 8px;
      height: 32px;
      margin-bottom: 5px;
      outline: none;
      font-size: 16px;
    }
  }

  .flex {
    display: flex;
    margin-bottom: 10px;
  }
}
</style>
