<header>
	<div class="icon">
		<img
			alt="Search icon"
			width="20"
			height="20"
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg=="
		/>
	</div>
	<div class="icon">
		<img
			alt="Plus icon"
			style="width: 30px; height: 30px;"
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVElEQVR4nO3RwQ2AIBQFQfpvGi82YBBdzUzy7zx2DADgEfO8z5uGxChSo0iNIjWK1ChSo8jOX33rbvObIStSj1lhSI0iNYrUKFKjSI0iNYoAAOOaA3YIe4Wc1+KdAAAAAElFTkSuQmCC"
		/>
	</div>
	<div class="icon">
		<img
			alt="Notification icon"
			style="width: 25px; height: 25px; transform: rotate(-15deg);"
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABm0lEQVR4nO3W32uPURwH8FdhYWEx5W4UNZaIC7K/wI0V/5JazNVaTbvxR1BuRm64MD+/F+TGZvoablwgawqd+jx1Wps9e34Qfd/11PPr/eN8OudzDj308I/jCK6hgy9YxitcxylcwDu8xfkmjbfgKr7j5zrXjwhUPC82Zb4dt0J0BdM4h37sxOmoytdVgbpNmd8OwSWc+c2/xzCfBR1r2ny4BOdoVomzf9q8wETwZvwFczEnEveJCujDzRB4j5EKGv3B/1SWMIJ7uIjZGiMvsCs0PpclzK6xfKqai8mXdF6UJezH82z5pOVUB5OhNbUZ0mAWohOhquAEvkVXPLlZ8iCe1QhxEG+Cf0NF7MPTCiEOYSF4c9ihBgZCJIm9xIEN/h/C62ztp0HUxgAelgiRmz/G3ibMy4YYyjafR02bb8M4PmT9IZ8Th2O/T+8fYI+GcWWdQ0cnmlRhfh+7tYClMEgHj9FVIVaykae22wq6YTKaBfgYFSiCXNIixtco/+WYA0WIu20G6IsQ3Tjlpvut8S2FuIPjbQbo4f/FLyRPlWEYoYKsAAAAAElFTkSuQmCC"
		/>
	</div>
	<div class="icon">
		<div class="menu"></div>
	</div>
</header>

<style>
	.menu {
		width: 20px;
		height: 2px;
		position: relative;
		background-color: black;
	}
	.menu::after,
	.menu::before {
		background-color: black;
		width: 20px;
		height: 2px;
		content: '';
		position: absolute;
	}
	.menu::after {
		top: 6px;
	}
	.menu::before {
		top: -6px;
	}

	header {
		box-shadow: 0 0 8px #ccd0d5;
		overflow: hidden;
		background-color: white;
		width: 100%;
		display: flex;
		padding: 12px 24px;
		justify-content: space-around;
	}
	.icon {
		background-color: #e1e2e8;
		width: 38px;
		height: 38px;
		border-radius: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
