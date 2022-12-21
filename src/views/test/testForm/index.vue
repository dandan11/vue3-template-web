<template>
  <el-form
    :model="formData"
    ref="vForm"
    :rules="rules"
    label-position="left"
    label-width="80px"
    size="default"
    @submit.prevent
  >
    <div class="card-container">
      <el-card
        style="
           {
            width: 100% !important;
          }
        "
        shadow="never"
      >
        <template #header>
          <div class="clear-fix">
            <span>基本信息</span>
            <i class="float-right el-icon-arrow-down"></i>
          </div>
        </template>
        <el-row>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="输入框1" prop="input45487">
              <el-input
                v-model="formData.input45487"
                type="text"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="输入框2" prop="input22337">
              <el-input
                v-model="formData.input22337"
                type="text"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="radio" prop="radio41275">
              <el-radio-group v-model="formData.radio41275">
                <el-radio
                  v-for="(item, index) in radio41275Options"
                  :key="index"
                  :label="item.value"
                  :disabled="item.disabled"
                  style="
                     {
                      display: inline;
                    }
                  "
                  >{{ item.label }}</el-radio
                >
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="checkbox" prop="checkbox10188">
              <el-checkbox-group v-model="formData.checkbox10188">
                <el-checkbox
                  v-for="(item, index) in checkbox10188Options"
                  :key="index"
                  :label="item.value"
                  :disabled="item.disabled"
                  style="
                     {
                      display: inline;
                    }
                  "
                  >{{ item.label }}</el-checkbox
                >
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="下拉框" prop="select50290">
              <el-select
                v-model="formData.select50290"
                class="full-width-input"
                clearable
              >
                <el-option
                  v-for="(item, index) in select50290Options"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="日期" prop="date69695">
              <el-date-picker
                v-model="formData.date69695"
                type="date"
                class="full-width-input"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                clearable
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, getCurrentInstance } from "vue";
export default defineComponent({
  name: "TestForm",
  components: {},
  props: {},
  setup() {
    const state = reactive({
      formData: {
        input45487: "",
        input22337: "",
        radio41275: null,
        checkbox10188: [],
        select50290: "",
        date69695: null
      },
      rules: {},
      radio41275Options: [
        {
          label: "radio 1",
          value: 1
        },
        {
          label: "radio 2",
          value: 2
        },
        {
          label: "radio 3",
          value: 3
        }
      ],
      checkbox10188Options: [
        {
          label: "check 1",
          value: 1
        },
        {
          label: "check 2",
          value: 2
        },
        {
          label: "check 3",
          value: 3
        }
      ],
      select50290Options: [
        {
          label: "select 1",
          value: 1
        },
        {
          label: "select 2",
          value: 2
        },
        {
          label: "select 3",
          value: 3
        }
      ]
    });
    const instance = getCurrentInstance();
    const submitForm = () => {
      instance.ctx.$refs["vForm"].validate(valid => {
        if (!valid) return;
        //TODO: 提交表单
      });
    };
    const resetForm = () => {
      instance.ctx.$refs["vForm"].resetFields();
    };
    return {
      ...toRefs(state),
      submitForm,
      resetForm
    };
  }
});
</script>

<style lang="scss">
.el-input-number.full-width-input,
.el-cascader.full-width-input {
  width: 100% !important;
}

.el-form-item--medium {
  .el-radio {
    line-height: 36px !important;
  }

  .el-rate {
    margin-top: 8px;
  }
}

.el-form-item--small {
  .el-radio {
    line-height: 32px !important;
  }

  .el-rate {
    margin-top: 6px;
  }
}

.el-form-item--mini {
  .el-radio {
    line-height: 28px !important;
  }

  .el-rate {
    margin-top: 4px;
  }
}

.clear-fix:before,
.clear-fix:after {
  display: table;
  content: "";
}

.clear-fix:after {
  clear: both;
}

.float-right {
  float: right;
}
</style>

<style lang="scss" scoped>
div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #e1e2e3;
    }
  }
}

div.tab-container {
}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {
}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;

  :deep(.el-divider--horizontal) {
    margin: 0;
  }
}
</style>
