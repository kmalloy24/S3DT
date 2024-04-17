<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<svg class="mr-4 w-8" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
						fill="url(#paint0_linear)"
					/>
					<path
						d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
						fill="url(#paint1_linear)"
						fill-opacity="0.2"
					/>
					<path
						d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
						fill="#3ECF8E"
					/>
					<defs>
						<linearGradient
							id="paint0_linear"
							x1="53.9738"
							y1="54.974"
							x2="94.1635"
							y2="71.8295"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#249361" />
							<stop offset="1" stop-color="#3ECF8E" />
						</linearGradient>
						<linearGradient
							id="paint1_linear"
							x1="36.1558"
							y1="30.578"
							x2="54.4844"
							y2="65.0806"
							gradientUnits="userSpaceOnUse"
						>
							<stop />
							<stop offset="1" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>

				<strong class="text-xl uppercase text-primary-500">OSS Hackathon 2024</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					href="https://supafork.com/new?repository_url=https%3A%2F%2Fgithub.com%2Fkmalloy24%2FS3DT"
					><img src="https://supafork.com/button" alt="Fork Supabase Database" /></a
				>
				<a href="https://github.com/kmalloy24/S3DT" target="_blank" rel="noreferrer">
					<svg
						class="fill-primary-500 mx-2"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/></svg
					>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
