// KVKK Policy Page
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const KVKKPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-calm">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-6">
            Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
          </h1>

          <div className="space-y-6 text-sm">
            <section>
              <p className="text-muted-foreground mb-4">
                Son Güncelleme: 18 Ekim 2025
              </p>
              
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, 
                kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek isteriz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Veri Sorumlusu</h2>
              <p>
                <strong>Şirket:</strong> Nechh Lab Robotics<br />
                <strong>Adres:</strong> Istanbul, Turkey<br />
                <strong>E-posta:</strong> emotice2025@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                2. İşlenen Kişisel Veriler
              </h2>
              <p className="mb-2">
                EMOTICE platformunda aşağıdaki kişisel verileriniz işlenmektedir:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, e-posta adresi</li>
                <li><strong>Hesap Bilgileri:</strong> Kullanıcı adı, şifre (şifrelenmiş)</li>
                <li><strong>Ruh Hali Verileri:</strong> Günlük ruh hali girişleri, notlar</li>
                <li><strong>Sohbet Verileri:</strong> AI asistan ile yapılan konuşmalar</li>
                <li><strong>Teknik Veriler:</strong> IP adresi, çerez bilgileri, cihaz bilgileri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                3. Kişisel Verilerin İşlenme Amaçları
              </h2>
              <p className="mb-2">Verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Kullanıcı hesabı oluşturma ve yönetme</li>
                <li>Duygusal sağlık takibi ve analiz hizmeti sunma</li>
                <li>AI destekli sohbet hizmeti sağlama</li>
                <li>Platform güvenliğini sağlama</li>
                <li>Yasal yükümlülükleri yerine getirme</li>
                <li>İstatistiksel analiz ve raporlama</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                4. Kişisel Verilerin Aktarımı
              </h2>
              <p className="mb-2">Verileriniz aşağıdaki durumlarda üçüncü kişilere aktarılabilir:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Supabase:</strong> Veritabanı hizmeti sağlayıcısı (ABD)</li>
                <li><strong>OpenAI:</strong> AI sohbet hizmeti sağlayıcısı (ABD)</li>
                <li><strong>Vercel:</strong> Hosting hizmeti sağlayıcısı (ABD)</li>
                <li><strong>Yasal Makamlar:</strong> Yasal zorunluluk halinde</li>
              </ul>
              <p className="mt-2">
                <strong>Not:</strong> Yurt dışına veri aktarımı yeterli koruma seviyesine 
                sahip ülkelere veya uygun güvenlik önlemleri alınarak yapılmaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                5. Kişisel Verilerin Toplanma Yöntemi
              </h2>
              <p>
                Verileriniz, platform üzerinden kayıt formları, ruh hali takip araçları, 
                sohbet arayüzü ve otomatik veri toplama yöntemleri (çerezler) ile toplanmaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                6. KVKK Kapsamındaki Haklarınız
              </h2>
              <p className="mb-2">KVKK'nın 11. maddesi uyarınca haklarınız:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>Düzeltme, silme ve yok edilme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme</li>
                <li>Kişisel verilerinizin kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                7. Haklarınızı Kullanma
              </h2>
              <p className="mb-2">
                KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki yollarla başvurabilirsiniz:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>E-posta:</strong> emotice2025@gmail.com</li>
                <li><strong>Platform:</strong> Hesap Ayarları → Veri Talebi</li>
              </ul>
              <p className="mt-2">
                Başvurularınız <strong>30 gün içinde</strong> ücretsiz olarak sonuçlandırılacaktır. 
                İşlemin ayrıca bir maliyet gerektirmesi halinde, 
                Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                8. Veri Güvenliği
              </h2>
              <p>
                Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler alınmıştır:
              </p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>SSL/TLS şifreleme</li>
                <li>Şifrelenmiş veri saklama</li>
                <li>Erişim kontrol sistemleri</li>
                <li>Düzenli güvenlik denetimleri</li>
                <li>Veri yedekleme sistemleri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                9. Veri Saklama Süresi
              </h2>
              <p>
                Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve 
                yasal saklama yükümlülüklerine uygun olarak saklanmaktadır. 
                Hesabınızı sildiğinizde, verileriniz <strong>30 gün içinde</strong> sistemden kalıcı olarak silinir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                10. 16 Yaş Altı Kullanıcılar
              </h2>
              <p>
                EMOTICE, 16 yaşın altındaki bireylerin kişisel verilerini bilerek işlememektedir. 
                16 yaşından küçük bir kullanıcının kaydını tespit etmemiz halinde, 
                ilgili hesap ve veriler derhal silinecektir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                11. Değişiklikler
              </h2>
              <p>
                Bu aydınlatma metni gerekli görüldüğü takdirde güncellenebilir. 
                Önemli değişiklikler e-posta yoluyla tarafınıza bildirilecektir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                12. İletişim
              </h2>
              <p>
                KVKK ile ilgili sorularınız için:
              </p>
              <ul className="list-none ml-0 space-y-1 mt-2">
                <li><strong>E-posta:</strong> emotice2025@gmail.com</li>
                <li><strong>Web:</strong> emotice.com/contact</li>
              </ul>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-xs text-muted-foreground">
                Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun olarak hazırlanmıştır. 
                EMOTICE platformunu kullanarak, bu aydınlatma metnini okuduğunuzu ve 
                kişisel verilerinizin yukarıda belirtilen şekilde işlenmesini kabul ettiğinizi beyan edersiniz.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KVKKPolicy;