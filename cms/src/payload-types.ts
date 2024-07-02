/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "NavigationHeaderLinks".
 */
export type NavigationHeaderLinks =
  | {
      title: string;
      url: string;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    media: Media;
    users: User;
    redirects: Redirect;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: Settings;
    navigation: Navigation;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  caption?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    webp?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    avif?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    thumbnail_webp?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    thumbnail_avif?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    mobile?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    mobile_webp?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    mobile_avif?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet_webp?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet_avif?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: number;
  from: string;
  to: string;
  code: '301' | '302' | '307' | '308' | '410' | '451';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
  id: number;
  siteName?: string | null;
  locale?:
    | (
        | 'as_IN'
        | 'fy_NL'
        | 'gl_ES'
        | 'he_IL'
        | 'kk_KZ'
        | 'nl_NL'
        | 'ti_ER'
        | 'cs'
        | 'gu_IN'
        | 'nso_ZA'
        | 'ki'
        | 'ki_KE'
        | 'vi'
        | 'ks_IN'
        | 'ca_AD'
        | 'en_NG'
        | 'es_PY'
        | 'fr_FR'
        | 'sl_SI'
        | 'ta_IN'
        | 'bm_ML'
        | 'eu_ES'
        | 'pa'
        | 'uz_Arab'
        | 'zh_Hans'
        | 'ha_Latn_GH'
        | 'khq_ML'
        | 'pap_AN'
        | 'sid_ET'
        | 'zh_Hant_TW'
        | 'eo'
        | 'ha_Latn_NE'
        | 'hi'
        | 'sl'
        | 'sr_Cyrl'
        | 'ug_CN'
        | 'fr_CG'
        | 'mhr_RU'
        | 'so_KE'
        | 'te'
        | 'vun'
        | 'ak_GH'
        | 'fr_RE'
        | 'st_ZA'
        | 'en_IE'
        | 'om_KE'
        | 'es_SV'
        | 'luo'
        | 'lv'
        | 'ru_UA'
        | 'ses'
        | 'shi_Tfng'
        | 'cy'
        | 'it_CH'
        | 'saq'
        | 'fr_CM'
        | 'ha_NG'
        | 'or'
        | 'sa_IN'
        | 'da_DK'
        | 'pl'
        | 'sw'
        | 'pa_Arab_PK'
        | 'aa_ER'
        | 'ar_IQ'
        | 'en_DK'
        | 'fr_ML'
        | 'mr'
        | 'nds_NL'
        | 'or_IN'
        | 'shi_Tfng_MA'
        | 'to'
        | 'lv_LV'
        | 'zh_HK'
        | 'az_Cyrl'
        | 'nd'
        | 'pt_PT'
        | 'ee'
        | 'fr_MG'
        | 'fr_SN'
        | 'nb'
        | 'ne_NP'
        | 'ar'
        | 'en_AG'
        | 'fr_NE'
        | 'ja_JP'
        | 'km'
        | 'tzm_Latn'
        | 'zu_ZA'
        | 'fil_PH'
        | 'sv_SE'
        | 'en_SG'
        | 'sr_Cyrl_ME'
        | 'fr_BE'
        | 'fr_CI'
        | 'id_ID'
        | 'sq_AL'
        | 'dv_MV'
        | 'rw'
        | 'sd_IN'
        | 'yo_NG'
        | 'af'
        | 'bg_BG'
        | 'en_VI'
        | 'es_MX'
        | 'fil'
        | 'es_UY'
        | 'gv_GB'
        | 'ar_SD'
        | 'fr_TG'
        | 'kk_Cyrl_KZ'
        | 'ps_AF'
        | 'shi'
        | 'sn'
        | 'es_ES'
        | 'sg'
        | 'tt_RU'
        | 'zu'
        | 'hu'
        | 'hu_HU'
        | 'ii'
        | 'lg_UG'
        | 'aa_ET'
        | 'nl'
        | 'rof'
        | 'ar_OM'
        | 'en_GB'
        | 'es_EC'
        | 'ml_IN'
        | 'sk'
        | 'tr_TR'
        | 'kl_GL'
        | 'mai_IN'
        | 'ur_IN'
        | 'de_LI'
        | 'ha_Latn'
        | 'hsb_DE'
        | 'ne'
        | 'pt_GW'
        | 'sq'
        | 'tr_CY'
        | 'byn_ER'
        | 'ebu'
        | 'pa_Guru_IN'
        | 'ebu_KE'
        | 'he'
        | 'ss_ZA'
        | 'uz_Latn_UZ'
        | 'mas_KE'
        | 'mk'
        | 'de_DE'
        | 'ha_Latn_NG'
        | 'bho_IN'
        | 'es_US'
        | 'kam_KE'
        | 'tr'
        | 'es_NI'
        | 'kea'
        | 'ur_PK'
        | 'bem_ZM'
        | 'chr'
        | 'sr_Latn_RS'
        | 'sr_ME'
        | 'ca_FR'
        | 'en_ZA'
        | 'es_AR'
        | 'fr_BL'
        | 'pa_PK'
        | 'pt'
        | 'fa'
        | 'is'
        | 'rw_RW'
        | 'ti_ET'
        | 'guz'
        | 'mfe_MU'
        | 'nn'
        | 'teo_KE'
        | 'zh_Hans_MO'
        | 'af_ZA'
        | 'ee_TG'
        | 'fr_MQ'
        | 'lt_LT'
        | 'pa_Guru'
        | 'saq_KE'
        | 'xh_ZA'
        | 'zh_TW'
        | 'bn'
        | 'mas'
        | 'ms'
        | 'my_MM'
        | 'shi_Latn_MA'
        | 'ta_LK'
        | 'ti'
        | 'ik_CA'
        | 'lag'
        | 'tzm'
        | 'yi_US'
        | 'fr_BF'
        | 'teo'
        | 'ar_BH'
        | 'en_NA'
        | 'hy'
        | 'lo_LA'
        | 'sr_RS'
        | 'sv_FI'
        | 'bem'
        | 'es_GQ'
        | 'gl'
        | 'sr_Latn_BA'
        | 'ts_ZA'
        | 'seh_MZ'
        | 'az_AZ'
        | 'en_AU'
        | 'fa_IR'
        | 'gu'
        | 'haw_US'
        | 'ml'
        | 'nan_TW'
        | 'zh_SG'
        | 'bez_TZ'
        | 'ka_GE'
        | 'kw'
        | 'aa_DJ'
        | 'ar_QA'
        | 'br_FR'
        | 'luy'
        | 'tig_ER'
        | 'hne_IN'
        | 'mer_KE'
        | 'nd_ZW'
        | 'ne_IN'
        | 'pa_Arab'
        | 'te_IN'
        | 'ar_MA'
        | 'es'
        | 'ko'
        | 'xog'
        | 'shi_Latn'
        | 'so_ET'
        | 'sv'
        | 'fr_BJ'
        | 'seh'
        | 'bez'
        | 'fr_TD'
        | 'mk_MK'
        | 'mt'
        | 'sr_Cyrl_RS'
        | 'tzm_Latn_MA'
        | 'ar_KW'
        | 'en_AS'
        | 'en_BZ'
        | 'es_VE'
        | 'fr_GP'
        | 'om'
        | 'so_DJ'
        | 'fur_IT'
        | 'haw'
        | 'mr_IN'
        | 'rwk_TZ'
        | 'az'
        | 'kab'
        | 'to_TO'
        | 'bn_IN'
        | 'de_LU'
        | 'dz_BT'
        | 'fr_CH'
        | 'ar_LB'
        | 'bs_BA'
        | 'ca'
        | 'es_PA'
        | 'am'
        | 'es_DO'
        | 'hr_HR'
        | 'kde'
        | 'ig_NG'
        | 'kln'
        | 'ku_TR'
        | 'pa_IN'
        | 'fi_FI'
        | 'gsw'
        | 'khq'
        | 'ru_MD'
        | 'shs_CA'
        | 'uz_Latn'
        | 'yo'
        | 'es_PE'
        | 'fo'
        | 'ro'
        | 'az_Latn_AZ'
        | 'csb_PL'
        | 'fr_RW'
        | 'nl_AW'
        | 'ro_RO'
        | 'se_NO'
        | 'sk_SK'
        | 'zh_Hant'
        | 'it_IT'
        | 'lb_LU'
        | 'mn_MN'
        | 'tg_TJ'
        | 'wae_CH'
        | 'ar_DZ'
        | 'id'
        | 'ht_HT'
        | 'pt_MZ'
        | 'ru'
        | 'en'
        | 'ro_MD'
        | 'cy_GB'
        | 'gez_ET'
        | 'mag_IN'
        | 'nb_NO'
        | 'sr_Latn_ME'
        | 'zh_Hant_MO'
        | 'en_HK'
        | 'en_NZ'
        | 'fr_MC'
        | 'kl'
        | 'luo_KE'
        | 'nds_DE'
        | 'sq_MK'
        | 'ar_YE'
        | 'el'
        | 'rwk'
        | 'zh'
        | 'ky_KG'
        | 'uk'
        | 'xog_UG'
        | 'be'
        | 'bo_IN'
        | 'cgg_UG'
        | 'de_BE'
        | 'fa_AF'
        | 'ga_IE'
        | 'th_TH'
        | 'tl_PH'
        | 'en_MT'
        | 'fr_CF'
        | 'fr_LU'
        | 'kln_KE'
        | 'kw_GB'
        | 'mas_TZ'
        | 'ta'
        | 'kok'
        | 'mer'
        | 'ar_TN'
        | 'ee_GH'
        | 'fr_DJ'
        | 'fr_GA'
        | 'kde_TZ'
        | 'lt'
        | 'dav_KE'
        | 'fr_CA'
        | 'ga'
        | 'ko_KR'
        | 'nyn'
        | 'vi_VN'
        | 'zh_CN'
        | 'en_BE'
        | 'es_419'
        | 'es_CL'
        | 'ha'
        | 've_ZA'
        | 'cv_RU'
        | 'en_PK'
        | 'ii_CN'
        | 'wal_ET'
        | 'gd_GB'
        | 'si_LK'
        | 'de'
        | 'en_ZW'
        | 'ar_AE'
        | 'ff'
        | 'ff_SN'
        | 'sw_TZ'
        | 'unm_US'
        | 'ms_MY'
        | 'so_SO'
        | 'sr'
        | 'da'
        | 'el_CY'
        | 'en_MP'
        | 'es_GT'
        | 'lag_TZ'
        | 'so'
        | 'uk_UA'
        | 'ar_SY'
        | 'es_BO'
        | 'fy_DE'
        | 'li_NL'
        | 'mi_NZ'
        | 'ak'
        | 'bg'
        | 'en_MH'
        | 'fr_GN'
        | 'lg'
        | 'naq_NA'
        | 'om_ET'
        | 'ar_SA'
        | 'my'
        | 'ar_LY'
        | 'ber_DZ'
        | 'ca_ES'
        | 'fi'
        | 'guz_KE'
        | 'ja'
        | 'jmc'
        | 'ig'
        | 'es_HN'
        | 'et_EE'
        | 'fr'
        | 'li_BE'
        | 'mfe'
        | 'sg_CF'
        | 'am_ET'
        | 'brx_IN'
        | 'en_US'
        | 'gez_ER'
        | 'uz_Arab_AF'
        | 'ar_IN'
        | 'as'
        | 'bs'
        | 'fr_GQ'
        | 'gv'
        | 'vun_TZ'
        | 'wa_BE'
        | 'fr_BI'
        | 'nr_ZA'
        | 'sc_IT'
        | 'zh_Hans_SG'
        | 'af_NA'
        | 'oc_FR'
        | 'crh_UA'
        | 'kk'
        | 'kok_IN'
        | 'th'
        | 'uz_UZ'
        | 'az_Cyrl_AZ'
        | 'is_IS'
        | 'kn'
        | 'rof_TZ'
        | 'ms_BN'
        | 'dav'
        | 'en_ZM'
        | 'si'
        | 'tn_ZA'
        | 'ka'
        | 'ar_JO'
        | 'es_CO'
        | 'kea_CV'
        | 'lij_IT'
        | 'ps'
        | 'ber_MA'
        | 'fr_MF'
        | 'hr'
        | 'ru_RU'
        | 'fo_FO'
        | 'iw_IL'
        | 'jmc_TZ'
        | 'kn_IN'
        | 'mg'
        | 'naq'
        | 'en_CA'
        | 'fr_CD'
        | 'ur'
        | 'wo_SN'
        | 'az_Latn'
        | 'bn_BD'
        | 'de_AT'
        | 'nn_NO'
        | 'yue_HK'
        | 'en_TT'
        | 'es_CR'
        | 'pl_PL'
        | 'ast_ES'
        | 'bm'
        | 'cgg'
        | 'eu'
        | 'gsw_CH'
        | 'kk_Cyrl'
        | 'nl_BE'
        | 'rm_CH'
        | 'sr_Latn'
        | 'asa'
        | 'chr_US'
        | 'el_GR'
        | 'nyn_UG'
        | 'et'
        | 'kab_DZ'
        | 'rm'
        | 'asa_TZ'
        | 'be_BY'
        | 'bo'
        | 'de_CH'
        | 'en_UM'
        | 'ses_ML'
        | 'sw_KE'
        | 'en_MU'
        | 'iu_CA'
        | 'os_RU'
        | 'zh_Hans_HK'
        | 'an_ES'
        | 'bo_CN'
        | 'tk_TM'
        | 'cs_CZ'
        | 'hy_AM'
        | 'sn_ZW'
        | 'ar_EG'
        | 'mg_MG'
        | 'teo_UG'
        | 'uz'
        | 'uz_Cyrl'
        | 'en_PH'
        | 'hi_IN'
        | 'it'
        | 'pt_BR'
        | 'zh_Hans_CN'
        | 'en_GU'
        | 'en_IN'
        | 'en_JM'
        | 'es_CU'
        | 'kam'
        | 'sr_Cyrl_BA'
        | 'uz_Cyrl_UZ'
        | 'zh_Hant_HK'
        | 'ca_IT'
        | 'en_BW'
        | 'es_PR'
        | 'fr_KM'
        | 'km_KH'
        | 'luy_KE'
        | 'mt_MT'
      )
    | null;
  tagLine?: string | null;
  logo?: number | Media | null;
  robots?: string | null;
  codeInjection?: CodeInjection;
  contact?: Contact;
  address?: Address;
  social?: Social;
  maintenance?: Maintenance;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CodeInjection".
 */
export interface CodeInjection {
  head?: string | null;
  footer?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Contact".
 */
export interface Contact {
  email?: string | null;
  telephone?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Address".
 */
export interface Address {
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  county?: string | null;
  postcode?: string | null;
  country?:
    | (
        | 'Afghanistan'
        | 'Albania'
        | 'Algeria'
        | 'Andorra'
        | 'Angola'
        | 'Antigua and Barbuda'
        | 'Argentina'
        | 'Armenia'
        | 'Australia'
        | 'Austria'
        | 'Azerbaijan'
        | 'Bahamas'
        | 'Bahrain'
        | 'Bangladesh'
        | 'Barbados'
        | 'Belarus'
        | 'Belgium'
        | 'Belize'
        | 'Benin'
        | 'Bhutan'
        | 'Bolivia'
        | 'Bosnia and Herzegovina'
        | 'Botswana'
        | 'Brazil'
        | 'Brunei'
        | 'Bulgaria'
        | 'Burkina Faso'
        | 'Burundi'
        | 'Cabo Verde'
        | 'Cambodia'
        | 'Cameroon'
        | 'Canada'
        | 'Central African Republic'
        | 'Chad'
        | 'Chile'
        | 'China'
        | 'Colombia'
        | 'Comoros'
        | 'Congo (Congo-Brazzaville)'
        | 'Costa Rica'
        | 'Croatia'
        | 'Cuba'
        | 'Cyprus'
        | 'Czechia (Czech Republic)'
        | 'Democratic Republic of the Congo'
        | 'Denmark'
        | 'Djibouti'
        | 'Dominica'
        | 'Dominican Republic'
        | 'Ecuador'
        | 'Egypt'
        | 'El Salvador'
        | 'Equatorial Guinea'
        | 'Eritrea'
        | 'Estonia'
        | 'Eswatini (formerly Swaziland)'
        | 'Ethiopia'
        | 'Fiji'
        | 'Finland'
        | 'France'
        | 'Gabon'
        | 'Gambia'
        | 'Georgia'
        | 'Germany'
        | 'Ghana'
        | 'Greece'
        | 'Grenada'
        | 'Guatemala'
        | 'Guinea'
        | 'Guinea-Bissau'
        | 'Guyana'
        | 'Haiti'
        | 'Honduras'
        | 'Hungary'
        | 'Iceland'
        | 'India'
        | 'Indonesia'
        | 'Iran'
        | 'Iraq'
        | 'Ireland'
        | 'Israel'
        | 'Italy'
        | 'Jamaica'
        | 'Japan'
        | 'Jordan'
        | 'Kazakhstan'
        | 'Kenya'
        | 'Kiribati'
        | 'Kuwait'
        | 'Kyrgyzstan'
        | 'Laos'
        | 'Latvia'
        | 'Lebanon'
        | 'Lesotho'
        | 'Liberia'
        | 'Libya'
        | 'Liechtenstein'
        | 'Lithuania'
        | 'Luxembourg'
        | 'Madagascar'
        | 'Malawi'
        | 'Malaysia'
        | 'Maldives'
        | 'Mali'
        | 'Malta'
        | 'Marshall Islands'
        | 'Mauritania'
        | 'Mauritius'
        | 'Mexico'
        | 'Micronesia'
        | 'Moldova'
        | 'Monaco'
        | 'Mongolia'
        | 'Montenegro'
        | 'Morocco'
        | 'Mozambique'
        | 'Myanmar (formerly Burma)'
        | 'Namibia'
        | 'Nauru'
        | 'Nepal'
        | 'Netherlands'
        | 'New Zealand'
        | 'Nicaragua'
        | 'Niger'
        | 'Nigeria'
        | 'North Korea'
        | 'North Macedonia'
        | 'Norway'
        | 'Oman'
        | 'Pakistan'
        | 'Palau'
        | 'Palestine State'
        | 'Panama'
        | 'Papua New Guinea'
        | 'Paraguay'
        | 'Peru'
        | 'Philippines'
        | 'Poland'
        | 'Portugal'
        | 'Qatar'
        | 'Romania'
        | 'Russia'
        | 'Rwanda'
        | 'Saint Kitts and Nevis'
        | 'Saint Lucia'
        | 'Saint Vincent and the Grenadines'
        | 'Samoa'
        | 'San Marino'
        | 'Sao Tome and Principe'
        | 'Saudi Arabia'
        | 'Senegal'
        | 'Serbia'
        | 'Seychelles'
        | 'Sierra Leone'
        | 'Singapore'
        | 'Slovakia'
        | 'Slovenia'
        | 'Solomon Islands'
        | 'Somalia'
        | 'South Africa'
        | 'South Korea'
        | 'South Sudan'
        | 'Spain'
        | 'Sri Lanka'
        | 'Sudan'
        | 'Suriname'
        | 'Sweden'
        | 'Switzerland'
        | 'Syria'
        | 'Taiwan'
        | 'Tajikistan'
        | 'Tanzania'
        | 'Thailand'
        | 'Timor-Leste'
        | 'Togo'
        | 'Tonga'
        | 'Trinidad and Tobago'
        | 'Tunisia'
        | 'Turkey'
        | 'Turkmenistan'
        | 'Tuvalu'
        | 'Uganda'
        | 'Ukraine'
        | 'United Arab Emirates'
        | 'United Kingdom'
        | 'United States of America'
        | 'Uruguay'
        | 'Uzbekistan'
        | 'Vanuatu'
        | 'Venezuela'
        | 'Vietnam'
        | 'Yemen'
        | 'Zambia'
        | 'Zimbabwe'
      )
    | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Social".
 */
export interface Social {
  linkedIn?: string | null;
  x?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  youtube?: string | null;
  tiktok?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Maintenance".
 */
export interface Maintenance {
  enabled?: boolean | null;
  title?: string | null;
  content?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation".
 */
export interface Navigation {
  id: number;
  header?: NavigationHeaderLinks;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}