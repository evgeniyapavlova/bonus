<script>
	import { timer2 } from '../lib/stores/timer';
	export let lang;

	const content = {
		en: {
			title: 'CHOOSE ONE OF AVAILABLE REWARDS',
			product: 'Product',
			yourWin: 'Your win',
			bonus: '100% Bonus deposit',
			leftInStock: 'Left in Stock',
			btn: 'Get&nbsp;10&nbsp;000&nbsp;$ for&nbsp;trading'
		},
		pt: {
			title: 'ESCOLHA UMA DAS RECOMPENSAS DISPONÍVEIS',

			product: 'Produto',
			yourWin: 'Você ganhou',
			bonus: 'Depósito de bônus de 100%',
			leftInStock: 'Restantes em estoque',
			btn: 'Ganhe&nbsp;10&nbsp;000&nbsp;$ para&nbsp;negociar'
		}
	};
</script>

<div>
	<h2>{content[lang].title}</h2>
	{#if lang === 'pt'}
		<p class="txt">
			Devido ao estoque limitado, sua recompensa foi reservada por <span class="new-timer"
				>{$timer2.min} minutos e {$timer2.sec} segundos</span
			>. Se você não reivindicar seu dinheiro durante esse período, ele será entregue ao próximo
			visitante sortudo.
		</p>
	{:else}
		<p class="txt">
			Due to the limited supply, your reward was reserved for <span class="new-timer"
				>{$timer2.min} minutes and {$timer2.sec} seconds</span
			>. If you do not claim your money during this period, it will be given to the next lucky
			visitor.
		</p>
	{/if}

	<div class="prize">
		<div class="prize-img">
			<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
				<g fill-rule="nonzero" fill="none">
					<circle fill="#F70" cx="15" cy="15" r="15" />
					<rect fill="#FFF" x="12.692" y="9.141" width="3.761" height="14.063" rx="1.88" />
					<rect fill="#FFF" x="6.581" y="12.656" width="3.761" height="10.547" rx="1.88" />
					<rect fill="#FFF" x="18.803" y="5.86" width="3.761" height="17.34" rx="1.88" />
				</g>
			</svg>
		</div>
		<div class="prize-info">
			<p>{content[lang].product}: <span class="prize-name">IQ Option</span></p>
			<p>
				<span style="margin-bottom: 3px; display: inline-block;">{content[lang].yourWin}:</span><br
				/>
				<span class="price">{content[lang].bonus}</span>
			</p>
			<p>
				{content[lang].leftInStock}: <span class="stock in">2</span>
			</p>
		</div>
		<div class="prize-cta">
			<a
				class="nlink"
				id="nlink"
				href="https://exnova.onelink.me/ePBv?pid=adsterra&amp;c=129139_wheel"
				>{@html content[lang].btn}</a
			>
		</div>
	</div>
	<div class="prize"></div>
</div>

<style>
	.price {
		color: var(--orange);
	}
	.prize-cta a {
		max-width: 180px;
		width: 100%;
		background: var(--orange);
		border-radius: 4px;
		font-size: 1rem;
		display: block;
		color: #fff;
		text-decoration: none;
		text-align: center;
		padding: 6px 10px;
		font-weight: 400;
	}
	.prize-info p {
		font-weight: 600;
		font-size: 1rem;
		margin-bottom: 8px;
	}
	.prize-img {
		width: 22%;
	}
	h2 {
		font-size: small;
		margin: 12px 0;
		text-align: center;
		line-height: 1.4;
		font-weight: bold;
	}
	.txt {
		margin-bottom: 10px;
	}
	.prize {
		border-top: 1px solid #efefef;
		padding-top: 16px;
		margin-bottom: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
