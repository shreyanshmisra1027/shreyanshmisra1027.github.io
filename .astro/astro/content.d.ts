declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"cheatsheets": {
"computer-science/http-status-codes.md": {
	id: "computer-science/http-status-codes.md";
  slug: "computer-science/http-status-codes";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"computer-science/networking-fundamentals.md": {
	id: "computer-science/networking-fundamentals.md";
  slug: "computer-science/networking-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"computer-science/os-fundamentals.md": {
	id: "computer-science/os-fundamentals.md";
  slug: "computer-science/os-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"computer-science/process-vs-thread.md": {
	id: "computer-science/process-vs-thread.md";
  slug: "computer-science/process-vs-thread";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"computer-science/tcp-ip-fundamentals.md": {
	id: "computer-science/tcp-ip-fundamentals.md";
  slug: "computer-science/tcp-ip-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"cybersecurity/authentication-vs-authorization.md": {
	id: "cybersecurity/authentication-vs-authorization.md";
  slug: "cybersecurity/authentication-vs-authorization";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"cybersecurity/cryptography-fundamentals.md": {
	id: "cybersecurity/cryptography-fundamentals.md";
  slug: "cybersecurity/cryptography-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"cybersecurity/hashing-vs-encryption.md": {
	id: "cybersecurity/hashing-vs-encryption.md";
  slug: "cybersecurity/hashing-vs-encryption";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"cybersecurity/nmap-authorized-lab-reference.md": {
	id: "cybersecurity/nmap-authorized-lab-reference.md";
  slug: "cybersecurity/nmap-authorized-lab-reference";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"cybersecurity/owasp-web-security-fundamentals.md": {
	id: "cybersecurity/owasp-web-security-fundamentals.md";
  slug: "cybersecurity/owasp-web-security-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"databases/postgresql-quick-reference.md": {
	id: "databases/postgresql-quick-reference.md";
  slug: "databases/postgresql-quick-reference";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"databases/sql-fundamentals.md": {
	id: "databases/sql-fundamentals.md";
  slug: "databases/sql-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"databases/sql-joins.md": {
	id: "databases/sql-joins.md";
  slug: "databases/sql-joins";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"dsa/arrays-and-strings.md": {
	id: "dsa/arrays-and-strings.md";
  slug: "dsa/arrays-and-strings";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"dsa/big-o-notation.md": {
	id: "dsa/big-o-notation.md";
  slug: "dsa/big-o-notation";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"dsa/binary-search.md": {
	id: "dsa/binary-search.md";
  slug: "dsa/binary-search";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"dsa/linked-lists.md": {
	id: "dsa/linked-lists.md";
  slug: "dsa/linked-lists";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"dsa/recursion-backtracking.md": {
	id: "dsa/recursion-backtracking.md";
  slug: "dsa/recursion-backtracking";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"dsa/sliding-window.md": {
	id: "dsa/sliding-window.md";
  slug: "dsa/sliding-window";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"dsa/sorting.md": {
	id: "dsa/sorting.md";
  slug: "dsa/sorting";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"dsa/stacks-and-queues.md": {
	id: "dsa/stacks-and-queues.md";
  slug: "dsa/stacks-and-queues";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"dsa/two-pointers.md": {
	id: "dsa/two-pointers.md";
  slug: "dsa/two-pointers";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/cpp-functions.md": {
	id: "programming/cpp-functions.md";
  slug: "programming/cpp-functions";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/cpp-fundamentals.md": {
	id: "programming/cpp-fundamentals.md";
  slug: "programming/cpp-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/cpp-oop.md": {
	id: "programming/cpp-oop.md";
  slug: "programming/cpp-oop";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/cpp-pointers-references.md": {
	id: "programming/cpp-pointers-references.md";
  slug: "programming/cpp-pointers-references";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/cpp-stl-algorithms.md": {
	id: "programming/cpp-stl-algorithms.md";
  slug: "programming/cpp-stl-algorithms";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/cpp-stl-containers.md": {
	id: "programming/cpp-stl-containers.md";
  slug: "programming/cpp-stl-containers";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/java-fundamentals.md": {
	id: "programming/java-fundamentals.md";
  slug: "programming/java-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/python-arrays-strings.md": {
	id: "programming/python-arrays-strings.md";
  slug: "programming/python-arrays-strings";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/python-control-flow.md": {
	id: "programming/python-control-flow.md";
  slug: "programming/python-control-flow";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/python-data-types.md": {
	id: "programming/python-data-types.md";
  slug: "programming/python-data-types";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/python-functions.md": {
	id: "programming/python-functions.md";
  slug: "programming/python-functions";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/python-fundamentals.md": {
	id: "programming/python-fundamentals.md";
  slug: "programming/python-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"programming/python-lists-dictionaries.md": {
	id: "programming/python-lists-dictionaries.md";
  slug: "programming/python-lists-dictionaries";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"tools/bash-fundamentals.md": {
	id: "tools/bash-fundamentals.md";
  slug: "tools/bash-fundamentals";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"tools/git-branching-merging.md": {
	id: "tools/git-branching-merging.md";
  slug: "tools/git-branching-merging";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"tools/git-commands.md": {
	id: "tools/git-commands.md";
  slug: "tools/git-commands";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"tools/linux-basic-commands.md": {
	id: "tools/linux-basic-commands.md";
  slug: "tools/linux-basic-commands";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"tools/linux-file-permissions.md": {
	id: "tools/linux-file-permissions.md";
  slug: "tools/linux-file-permissions";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
"tools/vscode-shortcuts.md": {
	id: "tools/vscode-shortcuts.md";
  slug: "tools/vscode-shortcuts";
  body: string;
  collection: "cheatsheets";
  data: InferEntrySchema<"cheatsheets">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"dsa": Record<string, {
  id: string;
  collection: "dsa";
  data: any;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
