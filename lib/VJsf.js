// same as VJsjNoDeps but requiring each used component of vuetify to try working well with vuetify-loader

import VJsfNoNeps from './VJsfNoDeps'

import {
  VAvatar,
  VAutocomplete,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VCheckbox,
  VChip,
  VColorPicker,
  VCombobox,
  VContainer,
  VDatePicker,
  VDialog,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VFlex,
  VFileInput,
  VIcon,
  VInput,
  VLayout,
  VListItemContent,
  VListItemTitle,
  VMenu,
  VRadio,
  VRadioGroup,
  VSelect,
  VSlider,
  VSpacer,
  VSubheader,
  VSwitch,
  VTabs,
  VTab,
  VTabItem,
  VTextarea,
  VTextField,
  VTimePicker,
  VTooltip
} from 'vuetify/lib'

export default {
  name: 'VJsf',
  components: {
    VAvatar,
    VAutocomplete,
    VBtn,
    VCard,
    VCardActions,
    VCardText,
    VCardTitle,
    VCheckbox,
    VChip,
    VColorPicker,
    VCombobox,
    VContainer,
    VDatePicker,
    VDialog,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VFlex,
    VFileInput,
    VIcon,
    VInput,
    VLayout,
    VListItemContent,
    VListItemTitle,
    VMenu,
    VRadio,
    VRadioGroup,
    VSelect,
    VSlider,
    VSpacer,
    VSubheader,
    VSwitch,
    VTabs,
    VTab,
    VTabItem,
    VTextarea,
    VTextField,
    VTimePicker,
    VTooltip
  },
  mixins: [VJsfNoNeps]
}
