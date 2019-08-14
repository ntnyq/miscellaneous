/**
 * @file lazyload / ES module
 * @module plugins/lozad
 */

import lozad from 'lozad'
import { isBrowser } from '~/env/esm'

if (isBrowser) {
  window.lozad = lozad
}

export default lozad
