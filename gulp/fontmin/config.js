const ALL_USED_FONTS =
  '西安宝鸡咸阳铜川渭南延安榆林汉中安康商洛韩城杨凌示范区西咸新区文明单位社区小城镇校园城市村'

exports.text = [...new Set(ALL_USED_FONTS.split(''))].join('')
