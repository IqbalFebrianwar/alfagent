const Form = () => {
  return (
    <form className="my-10 ">
      <div className="grid lg:grid-cols-2 lg:gap-2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pilih Agent*</span>
          </div>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Pilih
            </option>
            <option>Gunadi</option>
            <option>Supri</option>
          </select>
        </label>
      </div>

      <div className="my-5">
        <h1 className="text-xl font-semibold">Monitoring Agent</h1>
        <h1 className="text-md font-semibold mt-4">SSC - SALAM PEMBUKA CSO</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              1. CCO menyebutkan Salam pembuka dengan baik & benar *
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              2. CCO menanyakan nama pelanggan *
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <h1 className="text-md font-semibold mt-4">SSC - SALAM PENUTUP CSO</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              3. CCO mengkonfirmasi kecukupan pelayanan *
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              4. CCO menyebutkan Salam penutup dengan baik dan benar*
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">5. Hold line*</span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>

        <h1 className="text-md font-semibold mt-4">
          SOFT SKILL – VERBAL SKILL
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              6. CCO memiliki nada suara yang baik dan intonasi yang baik*
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              7. CCO memiliki kecepatan berbicara yang baik dan artikulasi suara
              yang baik (tidak terlalu cepat/lambat) dan volume suara yg baik
              (tdk terlalu keras/pelan) *
            </span>
            <span className="label-text">(Bobot 4)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>

        <h1 className="text-md font-semibold mt-4">
          SOFT SKILL – NON VERBAL SKILL
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              8. CCO menyebutkan nama pelanggan pada bebarapa kesempatan*
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              9. CCO menggunakan Etika dan bahasa service yang baik *
            </span>
            <span className="label-text">(Bobot 10)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              10. CCO melakukan konfirmasi informasi/keluhan yang disampaikan
              pelanggan (Rangkuman)*
            </span>
            <span className="label-text">(Bobot 10)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">11. Salah Case type/Category)*</span>
            <span className="label-text">(Bobot 5)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Task sudah sesuai atau belum *</span>
            <span className="label-text">(Bobot 5)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Other Zendesk …*</span>
            <span className="label-text">(Bobot 5)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              12. CCO memberikan pernyataan pendek positif saat pelanggan
              berbicara (empati)*
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              13. CCO tidak bertanya kembali mengenai sesuatu hal yang telah
              pelanggan sebutkan (CCO tidak mendengarkan dengan baik)*
            </span>
            <span className="label-text">(Bobot 6)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>

        <h1 className="text-md font-semibold mt-4">
          HARD SKILL - PRODUCT KNOWLEDGE AND SOLUTION
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              14. CCO yang melayani pelanggan menggali kebutuhan informasi*
            </span>
            <span className="label-text">(Bobot 3)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              15. Tidak melakukan Pengalihan Layanan*
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              16. Penjelasan yang diberikan oleh CCO sesuai dengan sumber
              informasi lainnya (Accuracy), lengkap dan dengan analisa yang
              benar *
            </span>
            <span className="label-text">(Bobot 15)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              17. CCO memberikan solusi lengkap dan tuntas
            </span>
            <span className="label-text">(Bobot 15)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>

        <h1 className="text-md font-semibold mt-4">ENJOYING</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              1. Suara CCO terdengar dengan baik (tidak kemerosok, tidak
              berdengung)
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              2. Tidak terdengar suara lainnya sebagai suara latar
            </span>
            <span className="label-text">(Bobot 2)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
      </div>

      <button className="btn btn-primary text-white w-32 my-5">Simpan</button>
    </form>
  );
};
export default Form;
