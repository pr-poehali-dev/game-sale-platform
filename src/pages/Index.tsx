import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Zap" className="text-orange-500" size={32} />
          <h1 className="text-2xl font-bold text-white font-oswald">
            ВАМПИР ВЫЖИВАЕТ
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#gameplay"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Геймплей
          </a>
          <a
            href="#requirements"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Системные требования
          </a>
          <a
            href="#purchase"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Купить
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-orange-500 text-white px-4 py-2 text-lg">
            🧛‍♂️ НОВАЯ ИГРА
          </Badge>
          <h1 className="text-7xl font-bold text-white mb-6 leading-tight font-oswald">
            ВАМПИР ВЫЖИВАЕТ
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Стань повелителем ночи в захватывающем приключении о вампире,
            который должен выжить в мире людей и чудовищ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
            >
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Купить за 100₽
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть трейлер
            </Button>
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section id="gameplay" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12 font-oswald">
          Геймплей
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Icon name="Zap" className="text-orange-500" size={24} />
                <CardTitle className="text-white">
                  Вампирские способности
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Используй сверхъестественные силы: превращение в летучую мышь,
                телепортация и контроль над разумом.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Icon name="Sword" className="text-orange-500" size={24} />
                <CardTitle className="text-white">Динамичные бои</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Сражайся с охотниками на вампиров, используя ловкость, скорость
                и древние артефакты.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Icon name="Moon" className="text-orange-500" size={24} />
                <CardTitle className="text-white">Ночной мир</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Исследуй готические замки, тёмные леса и подземелья в поисках
                древних секретов.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* System Requirements */}
      <section id="requirements" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12 font-oswald">
          Системные требования
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Icon name="Computer" className="text-orange-500" size={24} />
                <span>Минимальные</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>
                <strong>ОС:</strong> Windows 10 64-bit
              </p>
              <p>
                <strong>Процессор:</strong> Intel i5-6400 / AMD FX-6300
              </p>
              <p>
                <strong>Память:</strong> 8 GB RAM
              </p>
              <p>
                <strong>Графика:</strong> GTX 960 / RX 470
              </p>
              <p>
                <strong>Место:</strong> 15 GB
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Icon name="Zap" className="text-orange-500" size={24} />
                <span>Рекомендуемые</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>
                <strong>ОС:</strong> Windows 11 64-bit
              </p>
              <p>
                <strong>Процессор:</strong> Intel i7-8700K / AMD Ryzen 5 3600
              </p>
              <p>
                <strong>Память:</strong> 16 GB RAM
              </p>
              <p>
                <strong>Графика:</strong> RTX 3060 / RX 6600 XT
              </p>
              <p>
                <strong>Место:</strong> 15 GB SSD
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-oswald">
            Готов стать вампиром?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Окунись в мир тьмы и приключений уже сегодня!
          </p>
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-5xl font-bold text-orange-500">100₽</span>
              <div className="text-left">
                <p className="text-gray-300">Единоразовая покупка</p>
                <p className="text-sm text-gray-500">Без подписок и DLC</p>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-xl font-semibold"
            >
              <Icon name="ShoppingCart" className="mr-2" size={24} />
              Купить ВАМПИР ВЫЖИВАЕТ
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Поддерживаются все основные способы оплаты
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Zap" className="text-orange-500" size={24} />
            <span className="text-white font-bold text-xl">
              ВАМПИР ВЫЖИВАЕТ
            </span>
          </div>
          <p className="text-gray-400">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
