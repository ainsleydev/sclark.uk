// Code generated by github.com/atombender/go-jsonschema, DO NOT EDIT.

package types

import "github.com/ainsleydev/webkit/pkg/adapters/payload"

type Auth interface{}

type BlockContact struct {
	// BlockName corresponds to the JSON schema field "blockName".
	BlockName *string `json:"blockName,omitempty" yaml:"blockName,omitempty" mapstructure:"blockName,omitempty"`

	// BlockType corresponds to the JSON schema field "blockType".
	BlockType string `json:"blockType" yaml:"blockType" mapstructure:"blockType"`

	// Content corresponds to the JSON schema field "content".
	Content *string `json:"content,omitempty" yaml:"content,omitempty" mapstructure:"content,omitempty"`

	// Form corresponds to the JSON schema field "form".
	Form payload.Form `json:"form" yaml:"form" mapstructure:"form"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Identifier corresponds to the JSON schema field "identifier".
	Identifier *string `json:"identifier,omitempty" yaml:"identifier,omitempty" mapstructure:"identifier,omitempty"`

	// IncludeSocial corresponds to the JSON schema field "includeSocial".
	IncludeSocial *bool `json:"includeSocial,omitempty" yaml:"includeSocial,omitempty" mapstructure:"includeSocial,omitempty"`

	// Title corresponds to the JSON schema field "title".
	Title string `json:"title" yaml:"title" mapstructure:"title"`
}

type BlockContent struct {
	// BlockName corresponds to the JSON schema field "blockName".
	BlockName *string `json:"blockName,omitempty" yaml:"blockName,omitempty" mapstructure:"blockName,omitempty"`

	// BlockType corresponds to the JSON schema field "blockType".
	BlockType string `json:"blockType" yaml:"blockType" mapstructure:"blockType"`

	// Content corresponds to the JSON schema field "content".
	Content payload.RichText `json:"content" yaml:"content" mapstructure:"content"`

	// ContentHtml corresponds to the JSON schema field "contentHtml".
	ContentHtml *string `json:"contentHtml,omitempty" yaml:"contentHtml,omitempty" mapstructure:"contentHtml,omitempty"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Identifier corresponds to the JSON schema field "identifier".
	Identifier *string `json:"identifier,omitempty" yaml:"identifier,omitempty" mapstructure:"identifier,omitempty"`
}

type BlockContentDefault struct {
	// BlockName corresponds to the JSON schema field "blockName".
	BlockName *string `json:"blockName,omitempty" yaml:"blockName,omitempty" mapstructure:"blockName,omitempty"`

	// BlockType corresponds to the JSON schema field "blockType".
	BlockType string `json:"blockType" yaml:"blockType" mapstructure:"blockType"`

	// CentreAlign corresponds to the JSON schema field "centreAlign".
	CentreAlign *bool `json:"centreAlign,omitempty" yaml:"centreAlign,omitempty" mapstructure:"centreAlign,omitempty"`

	// Content corresponds to the JSON schema field "content".
	Content payload.RichText `json:"content" yaml:"content" mapstructure:"content"`

	// ContentHtml corresponds to the JSON schema field "contentHtml".
	ContentHtml *string `json:"contentHtml,omitempty" yaml:"contentHtml,omitempty" mapstructure:"contentHtml,omitempty"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Identifier corresponds to the JSON schema field "identifier".
	Identifier *string `json:"identifier,omitempty" yaml:"identifier,omitempty" mapstructure:"identifier,omitempty"`

	// Style corresponds to the JSON schema field "style".
	Style BlockContentDefaultStyle `json:"style" yaml:"style" mapstructure:"style"`
}

type BlockContentDefaultStyle string

const BlockContentDefaultStyleCentered BlockContentDefaultStyle = "centered"
const BlockContentDefaultStyleSpread BlockContentDefaultStyle = "spread"

type BlockContentWithImage struct {
	// BlockName corresponds to the JSON schema field "blockName".
	BlockName *string `json:"blockName,omitempty" yaml:"blockName,omitempty" mapstructure:"blockName,omitempty"`

	// BlockType corresponds to the JSON schema field "blockType".
	BlockType string `json:"blockType" yaml:"blockType" mapstructure:"blockType"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Identifier corresponds to the JSON schema field "identifier".
	Identifier *string `json:"identifier,omitempty" yaml:"identifier,omitempty" mapstructure:"identifier,omitempty"`

	// Image corresponds to the JSON schema field "image".
	Image payload.Media `json:"image" yaml:"image" mapstructure:"image"`

	// ImagePosition corresponds to the JSON schema field "imagePosition".
	ImagePosition string `json:"imagePosition" yaml:"imagePosition" mapstructure:"imagePosition"`

	// Sticky corresponds to the JSON schema field "sticky".
	Sticky *bool `json:"sticky,omitempty" yaml:"sticky,omitempty" mapstructure:"sticky,omitempty"`

	// TextLayout corresponds to the JSON schema field "textLayout".
	TextLayout payload.Blocks `json:"textLayout" yaml:"textLayout" mapstructure:"textLayout"`
}

type BlockFAQs struct {
	// BlockName corresponds to the JSON schema field "blockName".
	BlockName *string `json:"blockName,omitempty" yaml:"blockName,omitempty" mapstructure:"blockName,omitempty"`

	// BlockType corresponds to the JSON schema field "blockType".
	BlockType string `json:"blockType" yaml:"blockType" mapstructure:"blockType"`

	// Faqs corresponds to the JSON schema field "faqs".
	Faqs []BlockFAQsFaqsElem `json:"faqs,omitempty" yaml:"faqs,omitempty" mapstructure:"faqs,omitempty"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Identifier corresponds to the JSON schema field "identifier".
	Identifier *string `json:"identifier,omitempty" yaml:"identifier,omitempty" mapstructure:"identifier,omitempty"`
}

type BlockFAQsFaqsElem struct {
	// Answer corresponds to the JSON schema field "answer".
	Answer string `json:"answer" yaml:"answer" mapstructure:"answer"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Question corresponds to the JSON schema field "question".
	Question string `json:"question" yaml:"question" mapstructure:"question"`
}

type BlockGradient struct {
	// BlockName corresponds to the JSON schema field "blockName".
	BlockName *string `json:"blockName,omitempty" yaml:"blockName,omitempty" mapstructure:"blockName,omitempty"`

	// BlockType corresponds to the JSON schema field "blockType".
	BlockType string `json:"blockType" yaml:"blockType" mapstructure:"blockType"`

	// Colour corresponds to the JSON schema field "colour".
	Colour BlockGradientColour `json:"colour" yaml:"colour" mapstructure:"colour"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Identifier corresponds to the JSON schema field "identifier".
	Identifier *string `json:"identifier,omitempty" yaml:"identifier,omitempty" mapstructure:"identifier,omitempty"`
}

type BlockGradientColour string

const BlockGradientColourBlue BlockGradientColour = "blue"
const BlockGradientColourPink BlockGradientColour = "pink"

type BlockLogos struct {
	// BlockName corresponds to the JSON schema field "blockName".
	BlockName *string `json:"blockName,omitempty" yaml:"blockName,omitempty" mapstructure:"blockName,omitempty"`

	// BlockType corresponds to the JSON schema field "blockType".
	BlockType string `json:"blockType" yaml:"blockType" mapstructure:"blockType"`

	// Clients corresponds to the JSON schema field "clients".
	Clients []Clients `json:"clients,omitempty" yaml:"clients,omitempty" mapstructure:"clients,omitempty"`

	// Greyscale corresponds to the JSON schema field "greyscale".
	Greyscale *bool `json:"greyscale,omitempty" yaml:"greyscale,omitempty" mapstructure:"greyscale,omitempty"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Identifier corresponds to the JSON schema field "identifier".
	Identifier *string `json:"identifier,omitempty" yaml:"identifier,omitempty" mapstructure:"identifier,omitempty"`

	// Title corresponds to the JSON schema field "title".
	Title string `json:"title" yaml:"title" mapstructure:"title"`
}

type BlockPortfolio struct {
	// BlockName corresponds to the JSON schema field "blockName".
	BlockName *string `json:"blockName,omitempty" yaml:"blockName,omitempty" mapstructure:"blockName,omitempty"`

	// BlockType corresponds to the JSON schema field "blockType".
	BlockType string `json:"blockType" yaml:"blockType" mapstructure:"blockType"`

	// Content corresponds to the JSON schema field "content".
	Content *string `json:"content,omitempty" yaml:"content,omitempty" mapstructure:"content,omitempty"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Identifier corresponds to the JSON schema field "identifier".
	Identifier *string `json:"identifier,omitempty" yaml:"identifier,omitempty" mapstructure:"identifier,omitempty"`

	// Items corresponds to the JSON schema field "items".
	Items []Portfolio `json:"items,omitempty" yaml:"items,omitempty" mapstructure:"items,omitempty"`

	// Title corresponds to the JSON schema field "title".
	Title string `json:"title" yaml:"title" mapstructure:"title"`
}

type BlockReviews struct {
	// BlockName corresponds to the JSON schema field "blockName".
	BlockName *string `json:"blockName,omitempty" yaml:"blockName,omitempty" mapstructure:"blockName,omitempty"`

	// BlockType corresponds to the JSON schema field "blockType".
	BlockType string `json:"blockType" yaml:"blockType" mapstructure:"blockType"`

	// Content corresponds to the JSON schema field "content".
	Content *string `json:"content,omitempty" yaml:"content,omitempty" mapstructure:"content,omitempty"`

	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Identifier corresponds to the JSON schema field "identifier".
	Identifier *string `json:"identifier,omitempty" yaml:"identifier,omitempty" mapstructure:"identifier,omitempty"`

	// Items corresponds to the JSON schema field "items".
	Items []Reviews `json:"items,omitempty" yaml:"items,omitempty" mapstructure:"items,omitempty"`

	// Title corresponds to the JSON schema field "title".
	Title string `json:"title" yaml:"title" mapstructure:"title"`
}

type Clients struct {
	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt string `json:"createdAt" yaml:"createdAt" mapstructure:"createdAt"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// Logo corresponds to the JSON schema field "logo".
	Logo payload.Media `json:"logo" yaml:"logo" mapstructure:"logo"`

	// Name corresponds to the JSON schema field "name".
	Name string `json:"name" yaml:"name" mapstructure:"name"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt string `json:"updatedAt" yaml:"updatedAt" mapstructure:"updatedAt"`

	// Url corresponds to the JSON schema field "url".
	Url string `json:"url" yaml:"url" mapstructure:"url"`
}

type Config struct {
	// Collections corresponds to the JSON schema field "collections".
	Collections ConfigCollections `json:"collections" yaml:"collections" mapstructure:"collections"`

	// Db corresponds to the JSON schema field "db".
	Db ConfigDb `json:"db" yaml:"db" mapstructure:"db"`

	// Globals corresponds to the JSON schema field "globals".
	Globals ConfigGlobals `json:"globals" yaml:"globals" mapstructure:"globals"`

	// Locale corresponds to the JSON schema field "locale".
	Locale interface{} `json:"locale" yaml:"locale" mapstructure:"locale"`

	// User corresponds to the JSON schema field "user".
	User interface{} `json:"user" yaml:"user" mapstructure:"user"`
}

type ConfigCollections struct {
	// Clients corresponds to the JSON schema field "clients".
	Clients Clients `json:"clients" yaml:"clients" mapstructure:"clients"`

	// FormSubmissions corresponds to the JSON schema field "form-submissions".
	FormSubmissions FormSubmissions `json:"form-submissions" yaml:"form-submissions" mapstructure:"form-submissions"`

	// Forms corresponds to the JSON schema field "forms".
	Forms Forms `json:"forms" yaml:"forms" mapstructure:"forms"`

	// Pages corresponds to the JSON schema field "pages".
	Pages Pages `json:"pages" yaml:"pages" mapstructure:"pages"`

	// PayloadMigrations corresponds to the JSON schema field "payload-migrations".
	PayloadMigrations PayloadMigrations `json:"payload-migrations" yaml:"payload-migrations" mapstructure:"payload-migrations"`

	// PayloadPreferences corresponds to the JSON schema field "payload-preferences".
	PayloadPreferences PayloadPreferences `json:"payload-preferences" yaml:"payload-preferences" mapstructure:"payload-preferences"`

	// Portfolio corresponds to the JSON schema field "portfolio".
	Portfolio Portfolio `json:"portfolio" yaml:"portfolio" mapstructure:"portfolio"`

	// PortfolioCategories corresponds to the JSON schema field
	// "portfolio-categories".
	PortfolioCategories PortfolioCategories `json:"portfolio-categories" yaml:"portfolio-categories" mapstructure:"portfolio-categories"`

	// Posts corresponds to the JSON schema field "posts".
	Posts Posts `json:"posts" yaml:"posts" mapstructure:"posts"`

	// Reviews corresponds to the JSON schema field "reviews".
	Reviews Reviews `json:"reviews" yaml:"reviews" mapstructure:"reviews"`

	// Users corresponds to the JSON schema field "users".
	Users Users `json:"users" yaml:"users" mapstructure:"users"`
}

type ConfigDb struct {
	// DefaultIDType corresponds to the JSON schema field "defaultIDType".
	DefaultIDType float64 `json:"defaultIDType" yaml:"defaultIDType" mapstructure:"defaultIDType"`
}

type ConfigGlobals struct {
	// Navigation corresponds to the JSON schema field "navigation".
	Navigation Navigation `json:"navigation" yaml:"navigation" mapstructure:"navigation"`

	// Settings corresponds to the JSON schema field "settings".
	Settings Settings `json:"settings" yaml:"settings" mapstructure:"settings"`
}

type FormSubmissions payload.FormSubmission

type Forms payload.Form

type Navigation struct {
	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt *string `json:"createdAt,omitempty" yaml:"createdAt,omitempty" mapstructure:"createdAt,omitempty"`

	// Header corresponds to the JSON schema field "header".
	Header NavigationHeaderLinks `json:"header,omitempty" yaml:"header,omitempty" mapstructure:"header,omitempty"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt *string `json:"updatedAt,omitempty" yaml:"updatedAt,omitempty" mapstructure:"updatedAt,omitempty"`
}

type NavigationHeaderLinks []struct {
	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Title corresponds to the JSON schema field "title".
	Title string `json:"title" yaml:"title" mapstructure:"title"`

	// Url corresponds to the JSON schema field "url".
	Url string `json:"url" yaml:"url" mapstructure:"url"`
}

type Pages struct {
	// Status corresponds to the JSON schema field "_status".
	Status *PagesStatus `json:"_status,omitempty" yaml:"_status,omitempty" mapstructure:"_status,omitempty"`

	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt string `json:"createdAt" yaml:"createdAt" mapstructure:"createdAt"`

	// Hero corresponds to the JSON schema field "hero".
	Hero PagesHero `json:"hero" yaml:"hero" mapstructure:"hero"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// IsHome corresponds to the JSON schema field "isHome".
	IsHome *bool `json:"isHome,omitempty" yaml:"isHome,omitempty" mapstructure:"isHome,omitempty"`

	// Layout corresponds to the JSON schema field "layout".
	Layout payload.Blocks `json:"layout" yaml:"layout" mapstructure:"layout"`

	// Meta corresponds to the JSON schema field "meta".
	Meta *payload.SettingsMeta `json:"meta,omitempty" yaml:"meta,omitempty" mapstructure:"meta,omitempty"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt string `json:"updatedAt" yaml:"updatedAt" mapstructure:"updatedAt"`
}

type PagesHero struct {
	// Clients corresponds to the JSON schema field "clients".
	Clients []Clients `json:"clients,omitempty" yaml:"clients,omitempty" mapstructure:"clients,omitempty"`

	// Lead corresponds to the JSON schema field "lead".
	Lead string `json:"lead" yaml:"lead" mapstructure:"lead"`

	// Title corresponds to the JSON schema field "title".
	Title string `json:"title" yaml:"title" mapstructure:"title"`
}

type PagesStatus string

const PagesStatusDraft PagesStatus = "draft"
const PagesStatusPublished PagesStatus = "published"

type PayloadMigrations struct {
	// Batch corresponds to the JSON schema field "batch".
	Batch *float64 `json:"batch,omitempty" yaml:"batch,omitempty" mapstructure:"batch,omitempty"`

	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt string `json:"createdAt" yaml:"createdAt" mapstructure:"createdAt"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// Name corresponds to the JSON schema field "name".
	Name *string `json:"name,omitempty" yaml:"name,omitempty" mapstructure:"name,omitempty"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt string `json:"updatedAt" yaml:"updatedAt" mapstructure:"updatedAt"`
}

type PayloadPreferences struct {
	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt string `json:"createdAt" yaml:"createdAt" mapstructure:"createdAt"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// Key corresponds to the JSON schema field "key".
	Key *string `json:"key,omitempty" yaml:"key,omitempty" mapstructure:"key,omitempty"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt string `json:"updatedAt" yaml:"updatedAt" mapstructure:"updatedAt"`

	// User corresponds to the JSON schema field "user".
	User interface{} `json:"user" yaml:"user" mapstructure:"user"`

	// Value corresponds to the JSON schema field "value".
	Value interface{} `json:"value,omitempty" yaml:"value,omitempty" mapstructure:"value,omitempty"`
}

type Portfolio struct {
	// Category corresponds to the JSON schema field "category".
	Category PortfolioCategories `json:"category" yaml:"category" mapstructure:"category"`

	// Company corresponds to the JSON schema field "company".
	Company Clients `json:"company" yaml:"company" mapstructure:"company"`

	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt string `json:"createdAt" yaml:"createdAt" mapstructure:"createdAt"`

	// Date corresponds to the JSON schema field "date".
	Date string `json:"date" yaml:"date" mapstructure:"date"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// Image corresponds to the JSON schema field "image".
	Image payload.Media `json:"image" yaml:"image" mapstructure:"image"`

	// Title corresponds to the JSON schema field "title".
	Title string `json:"title" yaml:"title" mapstructure:"title"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt string `json:"updatedAt" yaml:"updatedAt" mapstructure:"updatedAt"`

	// Url corresponds to the JSON schema field "url".
	Url string `json:"url" yaml:"url" mapstructure:"url"`
}

type PortfolioCategories struct {
	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt string `json:"createdAt" yaml:"createdAt" mapstructure:"createdAt"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// Title corresponds to the JSON schema field "title".
	Title string `json:"title" yaml:"title" mapstructure:"title"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt string `json:"updatedAt" yaml:"updatedAt" mapstructure:"updatedAt"`
}

type Posts struct {
	// Status corresponds to the JSON schema field "_status".
	Status *PostsStatus `json:"_status,omitempty" yaml:"_status,omitempty" mapstructure:"_status,omitempty"`

	// Content corresponds to the JSON schema field "content".
	Content *payload.RichText `json:"content,omitempty" yaml:"content,omitempty" mapstructure:"content,omitempty"`

	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt string `json:"createdAt" yaml:"createdAt" mapstructure:"createdAt"`

	// Excerpt corresponds to the JSON schema field "excerpt".
	Excerpt *string `json:"excerpt,omitempty" yaml:"excerpt,omitempty" mapstructure:"excerpt,omitempty"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// Meta corresponds to the JSON schema field "meta".
	Meta *payload.SettingsMeta `json:"meta,omitempty" yaml:"meta,omitempty" mapstructure:"meta,omitempty"`

	// PublishedAt corresponds to the JSON schema field "publishedAt".
	PublishedAt *string `json:"publishedAt,omitempty" yaml:"publishedAt,omitempty" mapstructure:"publishedAt,omitempty"`

	// RelatedPosts corresponds to the JSON schema field "relatedPosts".
	RelatedPosts []Posts `json:"relatedPosts,omitempty" yaml:"relatedPosts,omitempty" mapstructure:"relatedPosts,omitempty"`

	// Tags corresponds to the JSON schema field "tags".
	Tags []PostsTagsElem `json:"tags,omitempty" yaml:"tags,omitempty" mapstructure:"tags,omitempty"`

	// Thumbnail corresponds to the JSON schema field "thumbnail".
	Thumbnail *payload.Media `json:"thumbnail,omitempty" yaml:"thumbnail,omitempty" mapstructure:"thumbnail,omitempty"`

	// Title corresponds to the JSON schema field "title".
	Title string `json:"title" yaml:"title" mapstructure:"title"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt string `json:"updatedAt" yaml:"updatedAt" mapstructure:"updatedAt"`
}

type PostsStatus string

const PostsStatusDraft PostsStatus = "draft"
const PostsStatusPublished PostsStatus = "published"

type PostsTagsElem struct {
	// Id corresponds to the JSON schema field "id".
	Id *string `json:"id,omitempty" yaml:"id,omitempty" mapstructure:"id,omitempty"`

	// Tag corresponds to the JSON schema field "tag".
	Tag *string `json:"tag,omitempty" yaml:"tag,omitempty" mapstructure:"tag,omitempty"`
}

type Reviews struct {
	// Author corresponds to the JSON schema field "author".
	Author ReviewsAuthor `json:"author" yaml:"author" mapstructure:"author"`

	// Content corresponds to the JSON schema field "content".
	Content string `json:"content" yaml:"content" mapstructure:"content"`

	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt string `json:"createdAt" yaml:"createdAt" mapstructure:"createdAt"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt string `json:"updatedAt" yaml:"updatedAt" mapstructure:"updatedAt"`
}

type ReviewsAuthor struct {
	// Description corresponds to the JSON schema field "description".
	Description string `json:"description" yaml:"description" mapstructure:"description"`

	// FirstName corresponds to the JSON schema field "firstName".
	FirstName string `json:"firstName" yaml:"firstName" mapstructure:"firstName"`

	// LastName corresponds to the JSON schema field "lastName".
	LastName string `json:"lastName" yaml:"lastName" mapstructure:"lastName"`
}

type Settings payload.Settings

type Users struct {
	// ApiKey corresponds to the JSON schema field "apiKey".
	ApiKey *string `json:"apiKey,omitempty" yaml:"apiKey,omitempty" mapstructure:"apiKey,omitempty"`

	// ApiKeyIndex corresponds to the JSON schema field "apiKeyIndex".
	ApiKeyIndex *string `json:"apiKeyIndex,omitempty" yaml:"apiKeyIndex,omitempty" mapstructure:"apiKeyIndex,omitempty"`

	// CreatedAt corresponds to the JSON schema field "createdAt".
	CreatedAt string `json:"createdAt" yaml:"createdAt" mapstructure:"createdAt"`

	// Email corresponds to the JSON schema field "email".
	Email string `json:"email" yaml:"email" mapstructure:"email"`

	// EnableAPIKey corresponds to the JSON schema field "enableAPIKey".
	EnableAPIKey *bool `json:"enableAPIKey,omitempty" yaml:"enableAPIKey,omitempty" mapstructure:"enableAPIKey,omitempty"`

	// Hash corresponds to the JSON schema field "hash".
	Hash *string `json:"hash,omitempty" yaml:"hash,omitempty" mapstructure:"hash,omitempty"`

	// Id corresponds to the JSON schema field "id".
	Id float64 `json:"id" yaml:"id" mapstructure:"id"`

	// LockUntil corresponds to the JSON schema field "lockUntil".
	LockUntil *string `json:"lockUntil,omitempty" yaml:"lockUntil,omitempty" mapstructure:"lockUntil,omitempty"`

	// LoginAttempts corresponds to the JSON schema field "loginAttempts".
	LoginAttempts *float64 `json:"loginAttempts,omitempty" yaml:"loginAttempts,omitempty" mapstructure:"loginAttempts,omitempty"`

	// Name corresponds to the JSON schema field "name".
	Name string `json:"name" yaml:"name" mapstructure:"name"`

	// Password corresponds to the JSON schema field "password".
	Password *string `json:"password,omitempty" yaml:"password,omitempty" mapstructure:"password,omitempty"`

	// ResetPasswordExpiration corresponds to the JSON schema field
	// "resetPasswordExpiration".
	ResetPasswordExpiration *string `json:"resetPasswordExpiration,omitempty" yaml:"resetPasswordExpiration,omitempty" mapstructure:"resetPasswordExpiration,omitempty"`

	// ResetPasswordToken corresponds to the JSON schema field "resetPasswordToken".
	ResetPasswordToken *string `json:"resetPasswordToken,omitempty" yaml:"resetPasswordToken,omitempty" mapstructure:"resetPasswordToken,omitempty"`

	// Salt corresponds to the JSON schema field "salt".
	Salt *string `json:"salt,omitempty" yaml:"salt,omitempty" mapstructure:"salt,omitempty"`

	// UpdatedAt corresponds to the JSON schema field "updatedAt".
	UpdatedAt string `json:"updatedAt" yaml:"updatedAt" mapstructure:"updatedAt"`
}
